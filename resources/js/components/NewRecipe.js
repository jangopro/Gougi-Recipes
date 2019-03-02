import React, { Component } from 'react'

export default class NewRecipe extends Component {
    constructor (props) {
        super(props)
        this.state = {
          name: '',
          description: '',
          cookTime: '',
          errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewRecipe = this.handleCreateNewRecipe.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleCreateNewRecipe (event) {
        event.preventDefault()

        const { history } = this.props

        const recipe = {
          name: this.state.name,
          description: this.state.description,
          cookTime: this.state.cookTime
        }

        axios.post('/api/recipes', recipe)
          .then(response => {
            // redirect to the homepage
            history.push('/')
          })
          .catch(error => {
            this.setState({
              errors: error.response.data.errors
            })
          })
      }

      hasErrorFor (field) {
        return !!this.state.errors[field]
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }

      render () {
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Create new project</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewRecipe}>
                      <div className='form-group'>
                        <label htmlFor='name'>Project name</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                          name='name'
                          value={this.state.name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('name')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='description'>Project description</label>
                        <textarea
                          id='description'
                          className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
                          name='description'
                          rows='10'
                          value={this.state.description}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('description')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='description'>Cook Time</label>
                        <input
                          id='description'
                          className={`form-control ${this.hasErrorFor('cookTime') ? 'is-invalid' : ''}`}
                          name='cookTime'
                          value={this.state.cookTime}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('cookTime')}
                      </div>
                      <button className='btn btn-primary'>Create</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

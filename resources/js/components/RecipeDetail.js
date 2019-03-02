import React, { Component } from 'react'
import axios from 'axios';

export default class RecipeDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            recipe: {}
        }
      }

      componentDidMount () {
        const recipeId = this.props.match.params.id

        axios.get(`/api/recipes/${recipeId}`).then(response => {
          this.setState({
            recipe: response.data
          })
        })
      }

      render () {
        const { recipe } = this.state

        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>{recipe.name}</div>
                  <div className='card-body'>
                    <p>{recipe.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
  }
}

import React, { Component } from 'react'
import axios from 'axios';

export default class RecipeDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            recipe: {
              instructions: []
            }
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
                    <p>{recipe.author}</p>
                    <p>Prep time: {recipe.prepTime} min</p>
                    <p>Cook Time: {recipe.cookTime} min</p>
                    <ol>
                    {
                      recipe.instructions.map( instruction => (
                        <li key={instruction.id}>{instruction.description}</li>
                        ))
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
  }
}

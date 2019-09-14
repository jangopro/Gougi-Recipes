import React, { Component } from 'react';
import axios from 'axios';
import RecipeRating from './RecipeRating';

export default class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                instructions: []
            }
        };
    }

    componentDidMount() {
        const recipeId = this.props.match.params.id;

        axios.get(`/api/recipes/${recipeId}`).then(response => {
            this.setState({
                recipe: response.data
            });
        });
    }

    render() {
        const { recipe } = this.state;

        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div>
                        <div>
                            <div>{recipe.name}</div>
                            <div>
                                <p>{recipe.description}</p>
                                <p>{recipe.author}</p>
                                <img src={recipe.image} alt="" />
                                <p>Prep time: {recipe.prepTime} min</p>
                                <p>Cook Time: {recipe.cookTime} min</p>
                                <p>
                                    Site web:{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener"
                                        href={recipe.url}
                                    >
                                        {recipe.url}
                                    </a>
                                </p>
                                <RecipeRating rating={recipe.rating} />
                                <p>Note: {recipe.note}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

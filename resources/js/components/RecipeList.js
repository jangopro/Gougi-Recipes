import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RecipeRating from './RecipeRating';

export default class RecipeList extends Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        axios.get('api/recipes').then(response => {
            this.setState({
                recipes: response.data
            });
        });
    }

    render() {
        const { recipes } = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All recipes</div>
                            <div className="card-body">
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/create"
                                >
                                    Create new project
                                </Link>
                                <ul className="list-group">
                                    {recipes.map(recipe => (
                                        <Link
                                            className="list-group-item list-group-item-action d-flex mb-2"
                                            to={`/${recipe.id}`}
                                            key={recipe.id}
                                        >
                                            <div className="p-2">
                                                {recipe.name}
                                            </div>
                                            <div className="ml-auto p-2">
                                                <RecipeRating
                                                    rating={recipe.rating}
                                                />
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

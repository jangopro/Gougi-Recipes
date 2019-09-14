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

    calculateTime(prepTime, cookTime) {
        return this.timeConvert(parseInt(prepTime) + parseInt(cookTime));
    }

    timeConvert(time) {
        var num = time;
        var hours = num / 60;
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);

        var minutesString = rminutes < 10 ? `0${rminutes}` : rminutes;
        if (rhours < 1) {
            minutesString = `${rminutes} min`;
        }
        console.log(rhours);
        var hoursString = rhours > 0 ? `${rhours}h` : '';

        console.log(hoursString);
        return hoursString + minutesString;
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
                                    Add new recipe
                                </Link>
                                <ul className="list-group">
                                    {recipes.map(recipe => (
                                        <Link
                                            className="list-group-item list-group-item-action d-flex mb-2"
                                            to={`/${recipe.id}`}
                                            key={recipe.id}
                                        >
                                            <img
                                                src={recipe.image}
                                                style={{ width: 100 }}
                                                alt=""
                                            />
                                            <div className="p-2">
                                                {recipe.name}
                                            </div>
                                            <div className="p-2">
                                                {this.calculateTime(
                                                    recipe.prepTime,
                                                    recipe.cookTime
                                                )}
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

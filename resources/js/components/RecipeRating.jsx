import React, { Component } from 'react';
import Rating from './Rating';

export default class RecipeRating extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let ratings = [];

        for (let index = 0; index < 5; index++) {
            if (index < this.props.rating) {
                ratings.push(<Rating key={index} checked={true} />);
            } else {
                ratings.push(<Rating key={index} checked={false} />);
            }
        }
        return ratings;
    }
}

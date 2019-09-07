import React, { Component } from 'react';

export default class Rating extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = this.props.checked ? 'checked' : '';
        return <span className={`fa fa-star ${className}`}></span>;
    }
}

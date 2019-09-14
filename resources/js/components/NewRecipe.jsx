import React, { Component } from 'react';

export default class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            note: '',
            cookTime: '',
            prepTime: '',
            author: '',
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewRecipe = this.handleCreateNewRecipe.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCreateNewRecipe(event) {
        event.preventDefault();

        const { history } = this.props;

        const recipe = {
            name: this.state.name,
            note: this.state.note,
            cookTime: this.state.cookTime,
            prepTime: this.state.prepTime,
            author: this.state.author,
            image: this.state.image
        };

        axios
            .post('/api/recipes', recipe)
            .then(response => {
                // redirect to the homepage
                history.push('/');
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                });
            });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            );
        }
    }

    render() {
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Create new project
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleCreateNewRecipe}>
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            Recipe name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor('name')
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('name')}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="note">
                                            Recipe Note
                                        </label>
                                        <textarea
                                            id="note"
                                            className={`form-control ${
                                                this.hasErrorFor('note')
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            name="note"
                                            rows="10"
                                            value={this.state.note}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('note')}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cookTime">
                                            Cook Time
                                        </label>
                                        <input
                                            id="cookTime"
                                            className={`form-control ${
                                                this.hasErrorFor('cookTime')
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            name="cookTime"
                                            value={this.state.cookTime}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('cookTime')}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prepTime">
                                            Prep Time
                                        </label>
                                        <input
                                            id="prepTime"
                                            className={`form-control ${
                                                this.hasErrorFor('prepTime')
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            name="prepTime"
                                            value={this.state.prepTime}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('prepTime')}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="author">Author</label>
                                        <input
                                            id="author"
                                            className={`form-control ${
                                                this.hasErrorFor('author')
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            name="author"
                                            value={this.state.author}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('author')}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Image">Image</label>
                                        <input
                                            id="image"
                                            className={`form-control ${
                                                this.hasErrorFor('image')
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('image')}
                                    </div>
                                    <button className="btn btn-primary">
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

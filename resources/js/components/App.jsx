import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './RecipeList.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import NewRecipe from './NewRecipe.jsx';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={RecipeList} />
                    <Route path="/create" component={NewRecipe} />
                    <Route path="/:id" component={RecipeDetail} />
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

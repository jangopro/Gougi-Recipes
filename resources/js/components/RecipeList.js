import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class RecipeList extends Component {
    constructor () {
        super();
        this.state = {
            recipes: []
        }
    }

    componentDidMount () {
        axios.get('api/recipes').then(response => {
            this.setState({
                recipes: response.data
            })
        })
    }
  
    render() {
        const { recipes } = this.state;
        return (
            <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>All projects</div>
                  <div className='card-body'>
                    <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Create new project
                    </Link>
                    <ul className='list-group list-group-flush'>
                      {recipes.map(project => (
                        <Link
                          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                          to={`/${project.id}`}
                          key={project.id}
                        >
                          {project.name}
                          <span className='badge badge-primary badge-pill'>
                            {project.tasks_count}
                          </span>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

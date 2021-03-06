import React, { Component } from 'react';

import { Title } from './compontents/Title'
import { SearchForm } from './compontents/SearchForm'
import { MovieList } from './compontents/MovieList';

import './App.css';
import 'bulma/css/bulma.css'




class App extends Component {
  
  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults ()  {
    return this.state.results.length === 0 
      ? <p>Sorry! Results not found!</p>
      : <MovieList movies={this.state.results} />
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>

        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
        </div>
        { this.state.usedSearch
            ? this._renderResults()
            : <small>Use the form to search a movie</small>
        }
      </div>
    );
  }
}

export default App;

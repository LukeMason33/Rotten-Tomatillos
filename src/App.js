import React, { Component } from 'react';
import './index.scss';
import MovieContainer from './movie-components/movie-container-component/movie-container.js';
import Header from './header-components/header-bar-component.js';
import SingleMovieView from './single-movie-component/single-movie-component.js';
import fetchRequests from './fetch-requests.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovieView: false,
      isLoading: true,
      singleMovie: []
    }
  }

  componentDidMount() {
    let allMovieInfo = [];
    fetchRequests.getAllMovies()
      .then(response => {
        response.movies.forEach(movie => {
          fetchRequests.getSingleMovie(movie.id)
            .then(response => {
              allMovieInfo.push(response.movie);
              this.setState({movies: allMovieInfo, isLoading: false})
            })
        })
      })
    }

    displaySingleMovieInfo = (event) => {
      let selectedMovie = this.state.movies.find(movie => movie.id == event.target.id);
      this.setState({singleMovieView: true, singleMovie: selectedMovie});
    }


  render () {
    return (
      <main className="main-dashboard">
        <Header />
        {this.state.isLoading && <h2>Loading...Please Wait!</h2>}
        {!this.state.singleMovieView && < MovieContainer movies={this.state.movies} displaySingleMovieInfo={this.displaySingleMovieInfo}/>}
        {this.state.singleMovieView && < SingleMovieView movie={this.state.singleMovie} />}
      </main>
    )
  }
}

export default App;

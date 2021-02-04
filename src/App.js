import React, { Component } from 'react';
import './index.scss';
import MovieContainer from './movie-components/movie-container-component/movie-container.js';
import Header from './header-components/header-bar-component.js';
import fetchRequests from './fetch-requests.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovieView: false,
      isLoading: true,
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


  render () {
    return (
      <main className="main-dashboard">
        <Header />
        <section className="movie-container">
          {this.state.isLoading && <h2>Loading...Please Wait!</h2>}
          < MovieContainer movies={this.state.movies} />
        </section>
      </main>
    )
  }
}

export default App;

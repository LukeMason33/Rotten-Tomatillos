import React, { Component } from 'react';
import './index.scss';
import MovieContainer from './movie-components/movie-container-component/movie-container.js';
import Header from './header-components/header-component.js';
import SingleMovieView from './single-movie-component/single-movie-component.js';
import fetchRequests from './fetch-requests.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovieView: false,
      isLoading: true,
      singleMovie: [],
      filteredMovies: [],
      beingSearched: false
    }
  }

  searchHandler = (event) => {
    let filtered = this.state.movies.filter(movie => {
      let title = movie.title.toLowerCase()
      let search = event.target.value.toLowerCase()
      return title.includes(search)
      })
    if (event.target.value.length > 0) {
      this.setState({beingSearched: true})
    }
    this.setState({filteredMovies: filtered})
  }

  filterHandler = (event) => {
    if (event.target.value === 'All') {
      this.setState({filteredMovies: [], beingSearched: false})
      return
    }
    let filtered = this.state.movies.filter(movie => {
      return movie.genres.includes(event.target.value)
    })
    this.setState({beingSearched: true, filteredMovies: filtered})
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

    displayMainDashboard = (event) => {
      this.setState({singleMovieView: false, singleMovie: []});
    }


  render () {
    return (
      <main className="main-dashboard">
        <Header
          onChange={event => this.searchHandler(event)}
          onFilter={event => this.filterHandler(event)}
          {...this.state.movies}
        />
        {this.state.isLoading && <h2 className="loading"><div></div></h2>}
        {this.state.filteredMovies.length > 0 && < MovieContainer movies={this.state.filteredMovies} />}
        {!this.state.beingSearched && < MovieContainer movies={this.state.movies} />}
        {!this.state.singleMovieView && < MovieContainer movies={this.state.movies} onClick={event => this.displaySingleMovieInfo(event)}/>}
        {this.state.singleMovieView && < SingleMovieView movie={this.state.singleMovie} onClick={event => this.displayMainDashboard(event)}/>}
      </main>
    )
  }
}

export default App;

import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
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
      isLoading: true,
      filteredMovies: [],
      beingSearched: false,
      error: '',
      searchInput: ''
    }
  }

  searchHandler = (event) => {
    this.setState({searchInput: event.target.value})
    let search = event.target.value.toLowerCase()
    let filtered = this.state.movies.filter(movie => {
      let title = movie.title.toLowerCase()
      return title.includes(this.state.searchInput)
      })
    if (event.target.value.length > 0) {
      this.setState({beingSearched: true})
    } else if (event.target.value.length === 0) {
      this.setState({beingSearched: false})
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
    this.setState({filteredMovies: filtered})
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
            .catch(error => this.setState({error: error}))
        })
      })
      .catch(error => this.setState({error: error}))
    }

  clearInput() {
    this.setState({searchInput: '', filteredMovies: [], beingSearched: false})
  }

  render () {
    const displayAllOrSingleMovies = () => {
      if (this.state.filteredMovies.length > 0) {
        return (
          <>
           < MovieContainer
            movies={this.state.filteredMovies}
            onClick={event => this.clearInput(event)}
            />
           <Header
           onChange={event => this.searchHandler(event)}
           onFilter={event => this.filterHandler(event)}
           {...this.state}
           />
         </>
       );
      }
      else if (this.state.movies.length > 0){
        return (
          <>
            < MovieContainer
             movies={this.state.movies}
             onClick={event => this.clearInput(event)}
             />
            <Header
              onChange={event => this.searchHandler(event)}
              onFilter={event => this.filterHandler(event)}
              {...this.state}
            />
          </>
        );
      }
      else if (this.state.error) {
        return <h2 className="error-message">{this.state.error}</h2>
      }
       else {
        return <h2 className="loading"><div></div></h2>
      }
    };

    return (
      <main className="main-dashboard">
        <Switch>
            <Route
            exact path="/"
            render={() => displayAllOrSingleMovies()}
            />
            <Route
              path="/singleMovie/:title/:id"
              render={({match}) => {
                return < SingleMovieView id={match.params.id} />
              }}
            />
          </Switch>
      </main>
    )
  }
}

export default App;

// {this.state.filteredMovies.length > 0 && < MovieContainer movies={this.state.filteredMovies} />}
// {!this.state.beingSearched && < MovieContainer movies={this.state.movies} />}
// {!this.state.singleMovieView && < MovieContainer movies={this.state.movies} onClick={event => this.displaySingleMovieInfo(event)}/>}
// {this.state.singleMovieView && < SingleMovieView movie={this.state.singleMovie} onClick={event => this.displayMainDashboard(event)}/>}

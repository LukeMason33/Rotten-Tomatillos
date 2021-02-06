import React, {Component} from 'react';
import './index.scss';
import MovieContainer from './movie-components/movie-container-component/movie-container.js';
import Header from './header-components/header-component.js';
import fetchRequests from './fetch-requests.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: [],
      filteredMovies: [],
      beingSearched: false,
      movies: [],
      singleMovieView: false,
      isLoading: true,
    }
  }

   changeHandler = (event) => {
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
        <Header onChange={event => this.changeHandler(event)} {...this.state.movies}/>
        <section className="movie-container">
          {this.state.isLoading && <h2 className="loading"><div></div></h2>}
          {this.state.filteredMovies.length > 0 && < MovieContainer {...this.state.filteredMovies} />}
          {!this.state.beingSearched && < MovieContainer {...this.state.movies} />}
        </section>
      </main>
    )
  }
}

export default App;

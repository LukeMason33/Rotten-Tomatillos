import React from 'react';
import './index.scss';
import movieData from './data.js';
import MovieContainer from './movie-components/movie-container-component/movie-container.js';
import Header from './header-components/header-component.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovie: [],
      filteredMovies: [],
      beingSearched: false,
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

  render () {
    return (
      <main className="main-dashboard">
        <Header onChange={event => this.changeHandler(event)}/>
        <section className="movie-container">
          {this.state.filteredMovies.length > 0 && < MovieContainer {...this.state.filteredMovies} />}
          {!this.state.beingSearched && < MovieContainer {...this.state.movies} />}
        </section>
      </main>
    )
  }
}

export default App;

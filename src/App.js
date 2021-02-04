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
      singleMovieView: false,
      filteredMovies: []
    }
  }

  changeHandler = (event) => {
    let filtered = this.state.movies.filter(movie => {
      let title = movie.title.toLowerCase()
      let search = event.target.value.toLowerCase()
      return title.includes(search)
      })
    this.setState({filteredMovies: filtered})
    console.log('FILTERED',this.state.filteredMovies)
    console.log('ALL', this.state.movies)
  }

  render () {
    return (
      <main className="main-dashboard">
        <Header onChange={event => this.changeHandler(event)}/>
        <section className="movie-container">
          < MovieContainer movies={this.state.movies} />
        </section>
      </main>
    )
  }
}

export default App;

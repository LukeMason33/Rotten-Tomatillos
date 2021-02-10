import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fetchRequests from '../fetch-requests.js';

class SingleMovieView extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetchRequests.getSingleMovie(parseInt(this.props.id))
      .then(response => {
        this.setState({movie: response.movie, isLoading: false})
      })
  }

  checkMount() {
    if (!this.state.isLoading) {
      return (
        <section className="single-movie-dashboard">
          <img src={this.state.movie.backdrop_path} alt={`Backdrop of ${this.state.movie.title}`}/>
          <div className="this.state.movie-info">
            <h2>Movie Title</h2>
            <p>{this.state.movie.title}</p>
            <h2>Summary</h2>
            <p>{this.state.movie.overview}</p>
            <h2>Rating</h2>
            <p>{`${this.state.movie.average_rating.toFixed(2)} out of 10`}</p>
            <h2>Genres</h2>
            <p>{this.state.movie.genres.join(', ')}</p>
            <h2>Release Date</h2>
            <p>{this.state.movie.release_date}</p>
            <h2>Movie Runtime</h2>
            <p>{`${this.state.movie.runtime} minutes`}</p>
            <h2>Budget</h2>
            <p>{`$${this.state.movie.budget}`}</p>
            <h2>Revenue</h2>
            <p>{`$${this.state.movie.revenue}`}</p>
            <Link to="/"><button className="back-to-main-btn">Return to Main Dasboard</button></Link>
          </div>
        </section>
      );
    } else {
      return <h2 className="loading"><div></div></h2>
    }
  }

  render() {
    return this.checkMount()
  }
}

export default SingleMovieView;

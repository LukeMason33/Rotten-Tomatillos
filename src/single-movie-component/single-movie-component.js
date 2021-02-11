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
          <span className="side-right"></span>
          <div className="this.state.movie-info">
            <img src={this.state.movie.backdrop_path} alt={`Backdrop of ${this.state.movie.title}`}/>
            <h1>{this.state.movie.title}</h1>
            <p>{this.state.movie.overview}</p>
            <div className="details-wrapper">
              <h2>Rating
                <p>{`${this.state.movie.average_rating.toFixed(2)} out of 10`}</p>
              </h2>
              <h2>Genres
                <p>{this.state.movie.genres.join(', ')}</p>
              </h2>
              <h2>Release Date
                <p>{this.state.movie.release_date}</p>
              </h2>
              <h2>Runtime
                <p>{`${this.state.movie.runtime} minutes`}</p>
              </h2>
              <h2>Budget
                <p>{`$${this.state.movie.budget}`}</p>
              </h2>
              <h2>Revenue
                <p>{`$${this.state.movie.revenue}`}</p>
              </h2>
            </div>
            <Link to="/"><button className="back-to-main-btn">Return to Main Dasboard</button></Link>
          </div>
          <span className="side-left"></span>
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

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MovieTrailer from './movie-trailer/movie-trailer.js';
import fetchRequests from '../fetch-requests.js';

class SingleMovieView extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      trailer: [],
      trailerView: false,
      isLoading: true,
      error: ''
    }
  }

  componentDidMount() {
    Promise.all([fetchRequests.getSingleMovie(parseInt(this.props.id)), fetchRequests.getMovieTrailer(parseInt(this.props.id))])
      .then(data => {
        this.setState({
          movie: data[0].movie,
          trailer: data[1].videos,
          isLoading: false
        })
      })
  }

  toggleTrailerView = (event, bool) => {
    this.setState({trailerView: bool})
  }

  checkMount() {
    if (!this.state.isLoading && !this.state.trailerView) {
      return (
        <>
          <header className="header">
            <div className="logo">
              <div ></div>
              <h1>Rotten<br/>Tomatillos</h1>
            </div>
          </header>
          <section className="single-movie-dashboard">
            <span className="side-left"></span>
            <div className="this.state.movie-info">
              <img src={this.state.movie.backdrop_path} alt={`Backdrop of ${this.state.movie.title}`}/>
              <h1>{this.state.movie.title}</h1>
              <p className="summary">{this.state.movie.overview}</p>
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
                  <p>{`${
                    !this.state.movie.budget ? 'No data available' :
                    this.state.movie.budget.toLocaleString('en-us', {
                      style: 'currency',
                      currency: 'USD'
                    })
                    }`}
                  </p>
                </h2>
                <h2>Revenue
                  <p>{`${
                    !this.state.movie.revenue ? 'No data available' :
                    this.state.movie.revenue.toLocaleString('en-us', {
                      style: 'currency',
                      currency: 'USD'
                    })
                  }`}
                  </p>
                </h2>
              </div>
              <div className="single-movie-buttons-container">
                <Link to="/">
                  <button className="back-to-main-btn">Home</button>
                </Link>
                  <button className="view-trailer-btn" onClick={event => this.toggleTrailerView(event, true)}>View Trailer</button>
              </div>
            </div>
            <span className="side-right"></span>
          </section>
        </>
      );
    }
    else if (this.state.error) {
      return <h2 className="error-message">{this.state.error}</h2>
    }
    else if (this.state.trailerView) {
      return < MovieTrailer
       trailer={this.state.trailer}
       movie={this.state.movie}
       toggleTrailerView={this.toggleTrailerView}
       />
    }
     else {
      return <h2 className="loading"><div></div></h2>
    }
  }

  render() {
    return this.checkMount()
  }
}

export default SingleMovieView;

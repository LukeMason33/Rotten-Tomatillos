import React from 'react';
import fetchRequests from '../fetch-requests.js';
import {Link} from 'react-router-dom';

function SingleMovieView(props) {
  fetchRequests.getSingleMovie(props.id)
    .then(response => response.movie)
    .then(movie =>  {
      return (
        <section className="single-movie-dashboard">
          <img src={movie.backdrop_path} alt={`Backdrop of ${movie.title}`}/>
          <div className="movie-info">
            <h2>Movie Title</h2>
            <p>{movie.title}</p>
            <h2>Summary</h2>
            <p>{movie.overview}</p>
            <h2>Rating</h2>
            <p>{`${movie.average_rating.toFixed(2)} out of 10`}</p>
            <h2>Genres</h2>
            <p>{movie.genres.join(', ')}</p>
            <h2>Release Date</h2>
            <p>{movie.release_date}</p>
            <h2>Movie Runtime</h2>
            <p>{`${movie.runtime} minutes`}</p>
            <h2>Budget</h2>
            <p>{`$${movie.budget}`}</p>
            <h2>Revenue</h2>
            <p>{`$${movie.revenue}`}</p>
            <Link to="/"><button className="back-to-main-btn" onClick={props.onClick}>Return to Main Dasboard</button></Link>
          </div>
        </section>
      )
    })
}

export default SingleMovieView;

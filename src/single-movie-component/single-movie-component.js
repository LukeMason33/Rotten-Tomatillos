import React from 'react';

function SingleMovieView({movie}) {
  console.log(movie);
  return (
    <section className="single-movie-dashboard">
      <img src={movie.backdrop_path} alt={`Backdrop of ${movie.title}`}/>
      <div className="movie-info">
        <h2>Movie Title</h2>
        <p>{movie.title}</p>
        <h2>Summary</h2>
        <p>{movie.overview}</p>
        <h2>Rating</h2>
        <p>{`${movie.title} out of 10`}</p>
        <h2>Genres</h2>
        <p>{movie.genres}</p>
        <h2>Release Date</h2>
        <p>{movie.release_date}</p>
        <h2>Movie Runtime</h2>
        <p>{movie.runtime}</p>
        <h2>Budget</h2>
        <p>{movie.budget}</p>
        <h2>Revenue</h2>
        <p>{`$${movie.revenue}`}</p>
      </div>
    </section>
  )
}

export default SingleMovieView;

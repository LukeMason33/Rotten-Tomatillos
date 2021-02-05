import React from 'react';
import MovieCard from '../movie-card-component/movie-card-component.js';

function MovieContainer (props)  {
  return (
    <article className="all-movies-container">
    {props.movies.map(movie => {
      return < MovieCard {...movie} key={movie.id} />
    })
    }
    </article>
  )
}

export default MovieContainer;

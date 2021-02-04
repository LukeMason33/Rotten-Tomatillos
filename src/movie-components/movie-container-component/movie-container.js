import React from 'react';
import MovieCard from '../movie-card-component/movie-card-component.js';

function MovieContainer ({props}) = {
  return (
    <>
    {props.movies.map(movie => {
      return < MovieCard value={movie} id={movie.id} />
    })
    }
    </>
  )
}

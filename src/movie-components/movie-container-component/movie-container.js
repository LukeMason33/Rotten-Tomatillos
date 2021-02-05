import React from 'react';
import MovieCard from '../movie-card-component/movie-card-component.js';

function MovieContainer (props)  {
  let keys = Object.keys(props)
  let movies = keys.map(key => props[key])
  return (
    <>
    {movies.map(movie => {
      return < MovieCard {...movie} key={movie.id} />
    })
    }
    </>
  )
}

export default MovieContainer;

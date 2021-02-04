import React, { Component } from 'react';


function MovieCard (props) {
  console.log(props);
  return (
    <div className='movie-card'>
      <img src={props}/>
    </div>
  )
}

export default MovieCard;

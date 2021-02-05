import React from 'react';


function MovieCard (props) {
  return (
    <section className='movie-card'>
      <h1>{props.title}</h1>
      <img src={props.poster_path} alt={"Poster of " + props.title}/>
      <div>
        <h2>Genre(s)</h2>
        <p>{props.genres.join(' ')}</p>
      </div>
      <div>
        <h2>Rating</h2>
        <p>{props.average_rating.toFixed(2)}</p>
      </div>
    </section>
  )
}

export default MovieCard;

import React from 'react';
import { Link } from 'react-router-dom';


function MovieCard (props) {
  return (
    <section className='movie-card' id={props.id}>
      <img src={props.poster_path} alt={"Poster of " + props.title}/>
      <h1>{props.title}</h1>
      <div>
        <h2>Genre(s)</h2>
        <p>{props.genres.join(' ')}</p>
      </div>
      <div>
        <h2>Rating</h2>
        <p>{props.average_rating.toFixed(2)}</p>
      </div>
      <Link to={`/singleMovie/${props.title}/${props.id}`}><button className="movie-details-btn" id={props.id}>Details</button></Link>
    </section>
  )
}

export default MovieCard;

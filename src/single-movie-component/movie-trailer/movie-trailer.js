import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function MovieTrailer(props) {
  const trailer = props.trailer.find(trailer => trailer.type === 'Trailer');
  return(
    <section className="movie-trailer">
    <div className="movie-trailer-container">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer.key}`}  controls={true}/>
      <div className="button-container">
        <Link to={`/singleMovie/${props.movie.title}/${props.movie.id}`}>
          <button className="back-to-details-btn" onClick={event => props.toggleTrailerView(event, false)}>Back To Movie Details</button>
        </Link>
        <Link to="/">
          <button className="back-to-details-btn">Back To Home</button>
        </Link>
      </div>
    </div>
    </section>
  )
}

export default MovieTrailer;

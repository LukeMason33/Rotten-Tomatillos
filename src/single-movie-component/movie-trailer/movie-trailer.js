import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function MovieTrailer(props) {
  const trailer = props.trailer.find(trailer => trailer.type === 'Trailer');
  return(
    <section className="movie-trailer">
      <div className="movie-trailer-container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer.key}`}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className="button-container">
        <Link to={`/singleMovie/${props.movie.title}/${props.movie.id}`}>
          <button className="back-to-details-btn" onClick={event => props.toggleTrailerView(event, false)}>Back</button>
        </Link>
        <Link to="/">
          <button className="back-to-home-btn" onClick={props.onClick}>Home</button>
        </Link>
      </div>
    </section>
  )
}

export default MovieTrailer;

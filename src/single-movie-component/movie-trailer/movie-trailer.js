import ReactPlayer from 'react-player';

function MovieTrailer(props) {
  const trailer = props.trailer.find(trailer => trailer.type === 'Trailer');
  return(
    <section className="movie-trailer">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer.key}`}/>
    </section>
  )
}

export default MovieTrailer;

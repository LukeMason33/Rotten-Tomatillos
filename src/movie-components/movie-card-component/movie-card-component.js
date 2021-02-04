function MovieCard (props) {
  return (
    <div className='movie-card'>
      <img src={props.poster_path}/>
      <h1>{props.title}</h1>
      <div>
        <h2>Genre</h2>
        <p>*Insert Genre Here*</p>
      </div>
      <div>
        <h2>Rating</h2>
        <p>{props.average_rating.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default MovieCard;
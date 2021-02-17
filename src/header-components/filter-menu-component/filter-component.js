function HeaderFilter(props) {
  let allGenres = props.movies.map(movie => movie.genres).flat()
  let genres = allGenres.reduce((acc, genre) => {
    if (!acc.includes(genre)) {
      acc.push(genre)
    }
    return acc
  }, [])
  if (!props.beingSearched) {
      return (
        <div className="header-filter">
          <h1>Genre</h1>
          <select onChange={props.onFilter} aria-label='filter-by-genre'>
            <option value='All'>All</option>
            {genres.map(genre => {
              return <option value={genre} aria-label={`filter-by-${genre}`} key={genre}>{genre}</option>
            }
            )}
          </select>
        </div>
      )
    } else {
      return (
        <div className="header-filter">
          <h1>Genre</h1>
          <select onChange={props.onFilter}>
            <option value='All'>All</option>
          </select>
        </div>
      )
    }
}

export default HeaderFilter;

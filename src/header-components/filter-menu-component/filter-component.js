function HeaderFilter(props) {
  console.log('HEADERPROPS>>>>', props)
  let allGenres = Object.keys(props)
    .map(key => props[key].genres)
    .flat()
  allGenres.splice(-1, 1)
  let genres = allGenres.reduce((acc, genre) => {
    if (!acc.includes(genre)) {
      acc.push(genre)
    }
    return acc
  }, [])
    return (
      <div className="header-filter">
        Genres ⬇
        <div>
          {genres.map(genre => {
            return <button value={genre} onClick={props.onClick}>{genre}</button>
          }
          )}
        </div>
      </div>
    )
}

export default HeaderFilter;

/*

*/

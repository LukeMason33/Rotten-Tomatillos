function HeaderFilter(props) {
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
  console.log(genres)
    return (
      <div className="header-filter">
        Genres ⬇
        {genres.map(genre => {
          return <div>{genre}</div>
        }
        )}
      </div>
    )
}

export default HeaderFilter;

/*

*/

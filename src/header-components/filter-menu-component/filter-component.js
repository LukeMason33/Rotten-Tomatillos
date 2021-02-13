import {Link} from 'react-router-dom';

function HeaderFilter(props) {
  let allGenres = Object.keys(props)
    .map(key => props[key].genres)
    .flat()
  let genres = allGenres.reduce((acc, genre) => {
    if (!acc.includes(genre)) {
      acc.push(genre)
    }
    return acc
  }, [])
  genres.splice(-1,1)
  if (!props.beingSearched) {
      return (
        <div className="header-filter">
          <h1>Genre</h1>
          <select onChange={props.onFilter}>
            <option value='All'>All</option>
            {genres.map(genre => {
              return <option value={genre}>{genre}</option>
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

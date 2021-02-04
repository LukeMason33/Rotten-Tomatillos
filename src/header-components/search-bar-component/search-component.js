function HeaderSearch(props) {
    return (
      <div className="header-search-bar">
        <input name="search-for-Movies" type='text' placeholder='Search Movies..' onChange={props.onChange}>
        </input>
      </div>
    )
}

export default HeaderSearch;

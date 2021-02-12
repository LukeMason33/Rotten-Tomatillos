import React from 'react';

function HeaderSearch(props) {
    return (
      <form className="header-search-bar">
        <input name="search-for-Movies" type='text' placeholder='Search Movies..' onChange={props.onChange}>
        </input>
      </form>
    )
}

export default HeaderSearch;

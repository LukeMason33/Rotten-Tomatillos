import React from 'react';

function HeaderSearch(props) {
    return (
      <div className="header-search-bar">
        <input
          name="search-for-Movies"
          type='text'
          placeholder='Search Movies..'
          value={props.searchInput}
          onChange={props.onChange}
        >
        </input>
      </div>
    )
}

export default HeaderSearch;

import React from 'react';
import HeaderSearch from './search-bar-component/search-component.js';

function Header(props) {
  return (
    <header className="header">
      <h1>Rotten Tomatillos</h1>
      <HeaderSearch onChange={props.onChange}/>
    </header>
  )
}

export default Header;

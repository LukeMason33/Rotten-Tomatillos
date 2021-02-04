import HeaderSearch from './search-bar-component/search-component.js';
import HeaderFilter from './filter-menu-component/filter-component.js';

function Header(props) {
  return (
    <header className="header">
      <h1>Rotten Tomatillos</h1>
      <HeaderSearch onChange={props.onChange}/>
      <HeaderFilter/>
    </header>
  )
}

export default Header;

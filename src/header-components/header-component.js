import HeaderSearch from './search-bar-component/search-component.js';
import HeaderFilter from './filter-menu-component/filter-component.js';

function Header(props) {
  return (
    <header className="header">
      <h1 className="logo">
        <div ></div>
        <h1>Rotten Tomatillos</h1>
      </h1>
      <HeaderSearch onChange={props.onChange}/>
      <HeaderFilter {...props}/>
    </header>
  )
}

export default Header;

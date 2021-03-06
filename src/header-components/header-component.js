import HeaderSearch from './search-bar-component/search-component.js';
import HeaderFilter from './filter-menu-component/filter-component.js';

function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <div ></div>
        <h1>Rotten<br/>Tomatillos</h1>
      </div>
      {!props.singleMovieView && <HeaderSearch onChange={props.onChange} {...props}/>}
      {!props.singleMovieView && <HeaderFilter {...props} onFilter={props.onFilter}/>}
    </header>
  )
}

export default Header;

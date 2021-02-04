import React, { Component } from 'react';
/*
class HeaderSearch extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div className="header-search-bar">
        <input name="search-for-Movies" type='text' placeholder='Search Movies..' onChange={props.onChange(event)}>
        </input>
      </div>
    )
  }
}
*/

function HeaderSearch(props) {
    return (
      <div className="header-search-bar">
        <input name="search-for-Movies" type='text' placeholder='Search Movies..' onChange={props.onChange}>
        </input>
      </div>
    )
}

export default HeaderSearch;

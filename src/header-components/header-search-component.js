import React, { Component } from 'react';

class HeaderSearch extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div className="header-seacrh-bar">
        <input name="search-for-Movies" type='text' placeholder='Search Movies..'>
        </input>
      </div>
    )
  }
}

export default HeaderSearch;

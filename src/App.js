import React, { Component } from 'react';
import './App.css';
import movieData from './data.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render () {
    return(
      <h1>Here</h1>
    )
  }
}

export default App;

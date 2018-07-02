import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="container">
          <h1 className="poster">Black Mirror</h1>
          <h1 className="poster">Breaking Bad</h1>
          <h1 className="poster">Death Note</h1>
        </div>
        <div className="container">
          <h1 className="poster">Game of Thrones</h1>
          <h1 className="poster">The Walking Dead</h1>
          <h1 className="poster">The Wire</h1>
        </div>

        
      </div>
    );
  }
}

export default App;

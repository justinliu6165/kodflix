import React, { Component } from 'react';
import './App.css';
import Inception from './Images/inception.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <img src={Inception} alt="Inception Poster" className="poster" />

        
      </div>
    );
  }
}

export default App;

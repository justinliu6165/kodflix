import React, { Component } from 'react';
import './App.css';
import BlackMirror from './Images/BlackMirror.jpg';
import BreakingBad from './Images/BreakingBad.jpg';
import DeathNote from './Images/DeathNote.jpg';
import FearTheWalkingDead from './Images/FearTheWalkingDead.jpg';
import GoT from './Images/GoT.jpg';
import TheWire from './Images/TheWire.jpg';

function MovieItem (props) {
  return (
    <div className="item">
      <img src={props.src} alt={props.alt}/>
      <div className="title"><h2>{props.alt}</h2></div>
    </div>
  )
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <MovieItem src={BlackMirror} alt='Black Mirror'/>
          <MovieItem src={BreakingBad} alt='Breaking Bad'/>
          <MovieItem src={DeathNote} alt='Death Note'/>
        </div>
        <div className="container">
          <MovieItem src={FearTheWalkingDead} alt='Fear The Walking Dead'/>
          <MovieItem src={GoT} alt='Game Of Thrones'/>
          <MovieItem src={TheWire} alt='The Wire'/>
        </div>  
      </div>
    );
  }
}

export default App;

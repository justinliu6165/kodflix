import React, { Component } from 'react';
import './App.css';
import BlackMirror from './Images/BlackMirror.jpg';
import BreakingBad from './Images/BreakingBad.jpg';
import DeathNote from './Images/DeathNote.jpg';
import FearTheWalkingDead from './Images/FearTheWalkingDead.jpg';
import GoT from './Images/GoT.jpg';
import TheWire from './Images/TheWire.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item" >
            <img src={BlackMirror} alt="Black Mirror"/>
          </div>
          <div className="item" >
            <img src={BreakingBad} alt="Breaking Bad"/>
          </div>
          <div className="item" >
            <img src={DeathNote} alt="Death Note"/>
          </div>
        </div>
        <div className="container">
          <div className="item" >
          <img src={GoT} alt="Game of Thrones"/>
          </div>
          <div className="item" >
          <img src={FearTheWalkingDead} alt="Fear the Walking Dead"/>
          </div>
          <div className="item" >
          <img src={TheWire} alt="The Wire"/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;

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
            <div className="title"><h2>Black Mirror</h2></div>
          </div>
          <div className="item" >
            <img src={BreakingBad} alt="Breaking Bad"/>
            <div className="title"><h2>Breaking Bad</h2></div>
          </div>
          <div className="item" >
            <img src={DeathNote} alt="Death Note"/>
            <div className="title"><h2>Death Note</h2></div>
          </div>
        </div>
        <div className="container">
          <div className="item" >
            <img src={GoT} alt="Game of Thrones"/>
            <div className="title"><h2>Game Of Thrones</h2></div>
          </div>
          <div className="item" >
            <img src={FearTheWalkingDead} alt="Fear the Walking Dead"/>
            <div className="title"><h2>Fear The Walking Dead</h2></div>
          </div>
          <div className="item" >
            <img src={TheWire} alt="The Wire"/>
            <div className="title"><h2>The Wire</h2></div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;

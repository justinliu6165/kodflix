import BlackMirror from './Images/BlackMirror.jpg';
import BreakingBad from './Images/BreakingBad.jpg';
import DeathNote from './Images/DeathNote.jpg';
import FearTheWalkingDead from './Images/FearTheWalkingDead.jpg';
import GoT from './Images/GoT.jpg';
import TheWire from './Images/TheWire.jpg';
import MovieItem from './Routes/MovieItem';
import React from 'react';

const Gallery = () => {
    return ( 
      <div>
        <div className="container">
          <MovieItem id='black-mirror' src={BlackMirror} alt='Black Mirror'/>
          <MovieItem id='breaking-bad' src={BreakingBad} alt='Breaking Bad' />
          <MovieItem id='death-note' src={DeathNote} alt='Death Note' />
        </div>
        <div className="container">
          <MovieItem id='fear-the-walking-dead' src={FearTheWalkingDead} alt='Fear The Walking Dead' />
          <MovieItem id='game-of-thrones' src={GoT} alt='Game Of Thrones' />
          <MovieItem id='the-wire' src={TheWire} alt='The Wire' />
        </div>
      </div>
    )
  };

  export default Gallery;
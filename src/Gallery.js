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
          <MovieItem src={BlackMirror} alt='Black Mirror' />
          <MovieItem src={BreakingBad} alt='Breaking Bad' />
          <MovieItem src={DeathNote} alt='Death Note' />
        </div>
        <div className="container">
          <MovieItem src={FearTheWalkingDead} alt='Fear The Walking Dead' />
          <MovieItem src={GoT} alt='Game Of Thrones' />
          <MovieItem src={TheWire} alt='The Wire' />
        </div>
      </div>
    )
  };

  export default Gallery;
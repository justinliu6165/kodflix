import MovieItem from './MovieItem';
import React from 'react';
import TVShows from './gallery-get';


const Gallery = () => {
  return (
    <div>
      <div className="container">
        {TVShows.map(show => <MovieItem id={show.id} src={show.src} alt={show.alt} />
        )}
      </div>
    </div>
  )
};

export default Gallery;
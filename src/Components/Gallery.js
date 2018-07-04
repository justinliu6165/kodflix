import MovieItem from './MovieItem';
import React from 'react';
import TVShows from './gallery-get';

export default function Gallery() {
  return (
    <div>
      <div className="container">
        {TVShows.map(show => <MovieItem key={show.id} id={show.id} src={show.src} alt={show.alt} />
        )}
      </div>
    </div>
  )
}
import Cover from './MovieItem';
import React from 'react';
import TVShows from '../gallery-get';

export default function Gallery() {
  return (

      <div className="container">
        {TVShows.map(show => <Cover key={show.id} id={show.id} src={show.src} alt={show.alt} />
        )}
      </div>

  )
}
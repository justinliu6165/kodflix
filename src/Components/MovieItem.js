import React from 'react';
import { Link } from "react-router-dom";

const MovieItem = (props) => {
<<<<<<< Updated upstream
    return (
      <Link className="item" to={props.id}>
        <img src={props.src} alt={props.alt} />
        <div className="title"><h2>{props.alt}</h2></div>
      </Link>
    )
  } 
=======
  return (
    <Link className="item" to={props.id}>
      <img src={props.src} alt={props.alt} />
      <div className="title"><h2>{props.alt}</h2></div>
    </Link>
  )
}
>>>>>>> Stashed changes


export default MovieItem;
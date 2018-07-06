import React from 'react';
import { Link } from "react-router-dom";

const Cover = (props) => {
  return (
    <Link className="item" to={props.id}>
      <img src={props.src} alt={props.alt} />
      <div className="title"><h2>{props.alt}</h2></div>
    </Link>
  )
}


export default Cover;
import React from 'react';
import { Link } from "react-router-dom";

const Cover = (props) => {
  return (
    <Link className="item" to={props.id}>
      <img src={require(`../../Common/Images/CoverImages/${props.id}.jpg`)} alt={props.alt} />
      <div className="title"><h2>{props.alt}</h2></div>
    </Link>
  )
}

export default Cover;
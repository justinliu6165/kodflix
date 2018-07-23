import React from 'react';
import './MenuOption.css';
import { Link } from "react-router-dom";

export default function MenuOption(props) {
    return (
        <Link className="options" to={props.link} onClick={props.changeMenuDisplay}>
            {props.svg}
            <p>{props.text}</p>
        </Link>
    )
}

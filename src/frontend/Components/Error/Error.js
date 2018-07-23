import React from 'react';
import './Error.css';
import { Link } from "react-router-dom";

export default function ErrorMessage() {
    return (
        <div className="errorMessage">
            <h2>Ooops, it looks like this page doesn't exist :(</h2>
            <Link to="/" id="homeBtn">Home</Link>
        </div>
    )
};

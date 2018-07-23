import React, { Component } from 'react';
import './ManageTvShows.css';
import { Link } from "react-router-dom";

class ManageTvShows extends Component {

    render() {

        return (
            <div className="manage-shows-container">
                <h1>Manage TV Shows Component</h1>
                <Link to="/" ><h2 className="home">Home</h2></Link>
            </div>
        )
    }
}

export default ManageTvShows;
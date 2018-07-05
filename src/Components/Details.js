import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Details.css';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello, this will be the details page for each Movie & TV show :)'
        }
    }



    componentDidMount() {
        setTimeout(() => this.setState({ message: 'Coming Soon :)!' }),
            3000
        );
    }


    render() {
        
        return (
            <div className="details">
                <h2>{this.state.message}</h2>
                <Link to="/" id="homeBtn">Home</Link>
            </div>
        );
    }
}

export default Details;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Details extends Component  {
    render(){
        return (
            <div>
                <p>Hello, this will be the details page for each Movie and TV show :)</p>
                <Link to="/">Home</Link>
            </div>
        );
    }
}  

export default Details;
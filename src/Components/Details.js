import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Details.css';
import TVShows from './gallery-get';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            message: 'hello'
        }
    }


    componentDidMount() {
        // setTimeout(
        //     () => this.setState({ message: 'Coming Soon!' }),
        //     3000
        // );

        let iD = this.props.match.params.id;
        // console.log(this.props.match.params.id)
        let show = TVShows.find((show) => show.id === iD);

        this.setState({message: show.alt})

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
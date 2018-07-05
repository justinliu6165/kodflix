import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './Details.css';
import TVShows from './gallery-get';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            redirect: false
        }
    }


    componentDidMount() {
        let iD = this.props.match.params.id;
        let show = TVShows.find((show) => show.id === iD);
        this.setState({ message: show.alt })
        // if (!show) {
        //     this.setState({ redirect: true });
        // } else {
        //     this.setState({ message: show.alt });
        // }
    }

    render() {

        // if (this.state.redirect) {
        //     return <Redirect to="/not-found" />
        // }

        return (
            <div className="details">
                <h2>{this.state.message}</h2>
                <Link to="/" id="homeBtn">Home</Link>
            </div>
        );
    }
}

export default Details;
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './Details.css';
import TVShows from '../gallery-get';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            redirect: false,
            showDescription: '',
            image: ''
        }
    }

    componentDidMount() {
        let iD = this.props.match.params.id;
        let show = TVShows.find((show) => show.id === iD);
        if (!show) {
            this.setState({ redirect: true });
        } else {
            this.setState({ 
                title: show.alt, 
                showDescription: show.description, 
                image: show.src
            });
        }
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/not-found" />
        }

        return (
            <div className="synopsis-container">
                <div className="synopsis-title">
                    {this.state.title}
                    <hr/>
                </div>
                <div className="profile">
                    <div className="description">
                        {this.state.showDescription}
                    </div>
                    <div className="synopsis-image">
                        <img src={this.state.image} alt={this.state.title} />
                    </div>
                </div>
                <div id="homeBtn">
                    <Link to="/" ><h2 className="home">Home</h2></Link>
                </div>
            </div>
        );
    }
}

export default Details;
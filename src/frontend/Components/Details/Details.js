import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Details.css';
import Loading from '../Icons/LoadingIcon/Loading.js';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            show: null,
            redirect: false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`/rest/shows/${id}`)
            .then(res => res.status === 404 ? null : res.json())
            .then(show => {
                if (show) {
                    this.setState({ show })
                } else {
                    this.setState({ redirect: true });
                }
            })
    }

    render() {

        let { show, redirect } = this.state;

        if (redirect) {
            return <Redirect to="/not-found" />
        }
        if (!show) {
            return <div><Loading /></div>
        }

        let imageUrl = require(`../../Common/Images/BackgroundImages/${show.id}-background.jpg`)

        return (
            <div
                className="synopsis-container"
                style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="synopsis-title">
                    {show.alt}
                </div>
                <hr />
                <div className="description">
                    <div>{show.description}</div>
                    <div className="production-crew-info">
                        {show.creator.length === 1 ?
                            `Creator: ${show.creator[0]}` :
                            `Creators: ${show.creator
                                .join(', ')}`}
                        <div>Stars: {show.stars.join(', ')}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
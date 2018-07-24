import React, {Component} from 'react';
import './PlayVideo.css';
import Loading from '../Icons/LoadingIcon/Loading.js';
import { Redirect } from "react-router-dom";

export default class PlayVideo extends Component {

    constructor(){
        super()
        this.state = {
            show: null,
            redirect: false
        }
    }

    componentDidMount() {
        let showId = this.props.match.params.showId
        fetch(`/rest/shows/${showId}`)
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

        return (
            <iframe
                className="video-trailers"
                title={show.alt}
                src={`${show.videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen>
            </iframe>
        )
    }
}
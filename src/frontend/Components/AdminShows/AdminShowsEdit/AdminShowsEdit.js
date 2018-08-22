import React, { Component } from 'react';
import './AdminShowsEdit.less';
import Form from '../Form/Form';
import { Redirect } from 'react-router-dom';

export default class AdminShowsEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            id: '',
            creator: ['', ''],
            stars: ['', '', ''],
            videoId: '',
            description: '',
            finishEdit: false
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`/rest/shows/${id}`)
            .then(res => res.status === 404 ? null : res.json())
            .then(show => {
                if (show) {
                    this.setState({
                        title: show.alt,
                        id: show.id,
                        creator: show.creator,
                        stars: show.stars,
                        videoId: show.videoId,
                        description: show.description
                    })
                } else {
                    this.setState({ redirect: true });
                }
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        Object.keys(this.state).forEach(input => {
            let value = this.state[input];
            data.append(input, this.getFormattedValue(value));
        });
        fetch('/rest/show/edit', {
            method: "PUT",
            body: data
        })
            .then((response) => {
                response.json()
            })
        this.reset();
    }

    getFormattedValue(value) {
        return typeof value === 'object' ? JSON.stringify(value) : value;
    }

    reset() {
        this.setState({ finishEdit: true })
    }

    onInputChange(name, value) {
        this.setState(prevState => {
            prevState[name] = value;
            return prevState;
        })
    }

    onMultipleInput(name, value, index) {
        this.setState(prevState => {
            prevState[name][index] = value;
            return prevState;
        })
    }

    render() {

        let { id, title, creator, stars, videoId, description, redirect, finishEdit } = this.state;

        if (redirect) {
            return <Redirect to="/not-found" />
        }

        return finishEdit ?
            <div className="after-submit-page">Your changes have been submitted!</div> :
            (
                <div className="edit-show-container" >
                    <div className="edit-show-title">Editing New Shows</div>
                    <Form
                        title={title}
                        id={id}
                        creator={creator}
                        stars={stars}
                        videoId={videoId}
                        description={description}
                        onChange
                        onInputChange={e => this.onInputChange(e.target.name, e.target.value)}
                        onMultipleInput={(name, value, index) => this.onMultipleInput(name, value, index)}
                        onSubmit={e => this.handleSubmit(e)} />
                </div>
            )
    }

}
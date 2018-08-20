import React, { Component } from 'react';
import './AdminShowsAdd.less';

export default class AdminShowsAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            id: '',
            creator: ['', ''],
            stars: ['', '', ''],
            videoId: '',
            description: ''
        };
    }

    getFormattedValue(value){
        return typeof value === 'object' ? JSON.stringify(value) : value;
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        Object.keys(this.state).forEach(input => {
            let value = this.state[input];
            data.append(input, this.getFormattedValue(value));
        });
        fetch('/rest/show/add', {
            method: "POST",
            body: data
          })
          .then((response) => {
              response.json()
            })
        this.reset();
    }

    reset(){
        this.setState({
            title: '',
            id: '',
            creator: ['', ''],
            stars: ['', '', ''],
            videoId: '',
            description: ''
        })
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

        let { id, title, creator, stars, videoId, description } = this.state;

        return (
            <div className="add-show-container">
                <div className="add-show-title">Adding New Shows</div>
                <form onSubmit={(e) => this.handleSubmit(e)} className="add-form">
                    <ul>
                        <li className="form-section">
                            <label>Add TV Show Title: </label>
                            <input
                                type="text"
                                value={title}
                                placeholder="TV Show Title..."
                                name="title"
                                onChange={e => this.onInputChange(e.target.name, e.target.value)}
                                autoComplete="off" />
                        </li>
                        <li className="form-section">
                            <label>Add TV Show ID: </label>
                            <input
                                type="text"
                                value={id}
                                placeholder="TV Show ID..."
                                name="id"
                                onChange={e => this.onInputChange(e.target.name, e.target.value)}
                                autoComplete="off" />
                        </li>
                        <li className="form-section">
                            <label>Add TV Show Creator(s): </label>
                            <div className="multiple-input">
                                {creator.map((el, index) => {
                                    return (<input
                                        type="text"
                                        key={`creator-${index}`}
                                        value={el}
                                        placeholder="TV Show Creator(s)..."
                                        onChange={e => this.onMultipleInput('creator', e.target.value, index)}
                                        autoComplete="off" />)
                                })}
                            </div>
                        </li>
                        <li className="form-section">
                            <label>Add TV Show Stars (max 3): </label>
                            <div className="multiple-input">
                                {stars.map((element, index) => {
                                    return (<input
                                        type="text"
                                        key={`stars-${index}`}
                                        className="add-stars"
                                        value={element}
                                        placeholder="TV Show Stars..."
                                        onChange={e => this.onMultipleInput('stars', e.target.value, index)}
                                        autoComplete="off" />)
                                })}
                            </div>
                        </li>
                        <li className="form-section">
                            <label>Add Youtube Embedded URL: </label>
                            <input
                                type="text"
                                value={videoId}
                                placeholder="YouTube embedded URL..."
                                name="videoId"
                                onChange={e => this.onInputChange(e.target.name, e.target.value)}
                                autoComplete="off" />
                        </li>
                        <li className="form-section">
                            <label>Add TV Show Synopsis: </label>
                            <textarea
                                value={description}
                                placeholder="TV Show Description..."
                                name="description"
                                onChange={e => this.onInputChange(e.target.name, e.target.value)}
                                autoComplete="off" />
                        </li>
                    </ul>
                    <div className="submitBtn">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }

}
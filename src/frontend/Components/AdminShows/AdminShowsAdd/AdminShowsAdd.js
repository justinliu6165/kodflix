import React, { Component } from 'react';
import './AdminShowsAdd.less';
import Form from '../Form/Form';

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

    handleSubmit(event){
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

    onInputChange(name, value){
        this.setState(prevState => {
            prevState[name] = value;
            return prevState;
        })
    }

    onMultipleInput(name, value, index){
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
                <Form 
                    title={title}
                    id={id}
                    creator={creator}
                    stars={stars}
                    videoId={videoId}
                    description={description}
                    onInputChange={e => this.onInputChange(e.target.name, e.target.value)}
                    onMultipleInput={(name, value, index) => this.onMultipleInput(name, value, index)}
                    onSubmit={e => this.handleSubmit(e)}
                />
            </div>
        )
    }

}
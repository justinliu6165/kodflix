import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './Details.css';
import Loading from '../LoadingIcon/Loading.js';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            show: null,
            redirect: false
        }
    }

    componentDidMount() {
        fetch(`/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(show => {
                if(show) {
                    this.setState({ show })
                } else {
                    this.setState({redirect: true});
                }
            })
    }

    render() {

        let { show, redirect } = this.state;
        
        if (redirect) {
            return <Redirect to="/not-found" />
        }
        if (!show) {
            return <div><Loading/></div>
        }

        return (
            <div className="synopsis-container">
                <div className="synopsis-title">
                    {show.alt}
                    <hr />
                </div>
                <div className="profile">
                    <div className="description">
                        {show.description}
                    </div>
                    <div className="synopsis-image">
                        <img src={require(`../../Common/Images/${show.id}.jpg`)} alt={show.alt} />
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
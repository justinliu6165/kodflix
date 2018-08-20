import React, { Component } from 'react';
import './AdminShowsList.css';
import Loading from '../../Icons/LoadingIcon/Loading.js';
import { Link } from "react-router-dom";

export default class AdminShowsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: null,
        }
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(res => res.json())
            .then(shows => this.setState({ shows }))
    }

    render() {

        let { shows } = this.state;
        let path = this.props.match.path;
        let urlPath = path.slice(0, path.lastIndexOf('list'))

        if (!shows) {
            return <div><Loading /></div>
        }

        return (
            <div>
                <div className="admin-shows-list">List of Shows</div>
                <Link to={`${urlPath}add`}>Add Shows</Link>
                {shows.map(show => {
                    return <InfoPanel
                            key={show.id}
                            id={show.id}
                            alt={show.alt}
                            description={show.description}
                            creator={show.creator}
                            stars={show.stars} />})
                }
            </div>
        )
    }
}

function InfoPanel(props) {
    return (
        <div className="admin-show-panel">
            <div className="admin-panel-image">
                <img src={require(`../../../Common/Images/CoverImages/${props.id}.jpg`)} alt={props.alt} />
            </div>
            <div className="admin-panel-title">
                <h1>{props.alt}</h1>
                <p>{props.description}</p>
                <div className="crew-info-admin">
                    {props.creator.length === 1 ?
                        `Creator: ${props.creator[0]}` :
                        `Creators: ${props.creator
                            .join(', ')}`}
                    <div>Stars: {props.stars.join(', ')}</div>
                </div>
            </div>
        </div>
    )
}
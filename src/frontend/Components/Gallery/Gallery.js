import Cover from './Covers';
import React, { Component } from 'react';
import Loading from '../Icons/LoadingIcon/Loading.js';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      shows: null
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(shows => this.setState({ shows }))
  } 

  render() {

    let shows = this.state.shows;

    if (!shows) {
      return <div><Loading/></div>
    }

    return (
      <div className="container">
        {shows.map(show => <Cover key={show.id} id={show.id} src={show.src} alt={show.alt} />
        )}
      </div>
    )
  }
}

export default Gallery;
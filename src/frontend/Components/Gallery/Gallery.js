import Cover from './Covers';
import React, { Component } from 'react';


class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      TVShows: []
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(TVShows => {
        this.setState({ TVShows });
      })
  }

  render() {

    let shows = this.state.TVShows;


    if (!shows) {
      return <div>Loading...</div>
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
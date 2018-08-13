import React, { Component } from 'react';
import './App.less';
import Details from './Components/Details/Details.js';
import Gallery from './Components/Gallery/Gallery.js';
import ErrorMessage from './Components/Error/Error.js';
import Menu from './Components/Menu/Menu.js';
import ManageTvShows from './Components/ManageTvShows/ManageTvShows.js';
import PlayVideo from '../frontend/Components/PlayVideo/PlayVideo.js';
import AdminShows from '../frontend/Components/AdminShows/AdminShows.js';
import { Route, Switch, withRouter } from "react-router-dom";
import ReactGA from 'react-ga';

class App extends Component {
  constructor({ history, location }) {
    super();
    ReactGA.initialize('UA-122233837-1');
    this.trackViewPage(location)
    history.listen((location) => this.trackViewPage(location))
  }

  trackViewPage(location) {
    var host = window.location.hostname;
    if (host !== "localhost") {
      ReactGA.pageview(location.pathname + location.search + location.hash);
    }
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact={true} path="/" component={Gallery} />
          <Route path='/not-found' component={ErrorMessage} />
          <Route path='/manage/tv-shows' component={ManageTvShows}/>
          <Route exact path="/:id" component={Details} />
          <Route path="/:showId/play" component={PlayVideo}/>
          <Route path="/admin/tv-shows" component={AdminShows}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

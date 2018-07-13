import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import Details from './Components/Details/Details.js';
import Gallery from './Components/Gallery/Gallery.js';
import ErrorMessage from './Components/Error/Error.js';
import ReactGA from 'react-ga';
// const history = createHistory();


class App extends Component {
  constructor({history,location}) {
    super();
    ReactGA.initialize('UA-122233837-1');
    this.trackViewPage(location)
    history.listen((location)=>this.trackViewPage(location))

    // history.listen((location, action)=>{
    //   console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    //   console.log(`The last navigation is ${action}`)
    // })
    // history.listen((location, action) => {
    //  
    //   
    // });

  }

  trackViewPage(location){
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }

  render() {
      
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Gallery} />
          <Route path='/not-found' component={ErrorMessage} />
          <Route path="/:id" component={Details} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

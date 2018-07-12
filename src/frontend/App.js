import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './Components/Details/Details.js';
import Gallery from './Components/Gallery/Gallery.js';
import ErrorMessage from './Components/Error/Error.js';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Gallery} />
              <Route path='/not-found' component={ErrorMessage}/>
              <Route path="/:id" component={Details} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from './Routes/Details';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Gallery} />
            <Route path="/details" component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

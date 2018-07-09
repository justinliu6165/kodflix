import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './Components/Details/Details';
import Gallery from './Components/Gallery/Gallery';
import ErrorMessage from './Components/Error/Error';


class App extends Component {
  state = {
    TVShows: []
  }

  componentDidMount(){
    fetch('/rest/shows')
      .then(res => res.json())
      .then(TVShows => {
        this.setState({TVShows});
      })
  }

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

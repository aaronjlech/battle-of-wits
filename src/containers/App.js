import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";

import HomeView from './HomeView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomeView} />
        </Switch>
    </div>
  )
  }
}

export default App;

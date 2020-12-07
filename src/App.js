import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import LightTraffics from './container/LightTraffics/LightTraffics';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <LightTraffics />
      </div>
    );
  }
}

export default App;

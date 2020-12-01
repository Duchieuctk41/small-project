import React, { Component } from 'react';
import './App.css';
import Random from './Components/Random/Random';
import Introduce from './Components/Introduce/Introduce';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Introduce />
      </div>
    );
  }
}

export default App;

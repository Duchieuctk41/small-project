import React, { Component } from 'react';
import './App.css';
import Random from './Components/Random/Random';
import Introduce from './Components/Introduce/Introduce';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout />
      </div>
    );
  }
}

export default App;

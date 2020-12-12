import React, { Component } from 'react';
import Aux from './hoc/Aux';
import TrafficLight from './container/TrafficLight/TrafficLight';
import TestHook from './Components/TestHook/TestHook';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <Aux className={classes.App}>
       <TrafficLight />
      </Aux>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Random from './Components/Random/Random';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <Aux className={classes.App}>
       <Random />
      </Aux>
    );
  }
}

export default App;

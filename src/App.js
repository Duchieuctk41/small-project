import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Restaurant from './Components/Restaurant/Restaurant';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <Aux className={classes.App}>
       <Restaurant />
      </Aux>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Random from './Components/Random/Random';
import Introduce from './Components/Introduce/Introduce';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduce />
      </div>
    );
  }
}

export default App;

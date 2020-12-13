import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Layout from './hoc/Layout/Layout';
import Burger from './container/BurgerBuilder/BurgerBuilder';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <Aux className={classes.App}>
       <Layout>
          <Burger />
       </Layout>
      </Aux>
    );
  }
}

export default App;

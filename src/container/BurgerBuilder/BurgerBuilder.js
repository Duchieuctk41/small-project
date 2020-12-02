import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControl from '../../Components/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burger />
                <BuildControl />
            </Aux>
        );
    }
}

export default BurgerBuilder;

import React, { Component } from 'react';
import Aux from '../Aux';

import BurgerBuilder from '../../container/BurgerBuilder/BurgerBuilder';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <BurgerBuilder />
            </Aux>
        );
    }
}

export default Layout;

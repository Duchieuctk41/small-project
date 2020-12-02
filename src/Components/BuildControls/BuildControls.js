import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Price</p>
        <BuildControl />
        <button>Order</button>
    </div>
);

export default buildControls;

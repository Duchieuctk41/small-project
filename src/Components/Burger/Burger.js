import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import classes from './Burger.css';

const Burger = props => (
    <div className={classes.Burger}>
        <Ingredient type="bread-top" />
    
        <Ingredient type="bread-bottom" />
    </div>
);

export default Burger;

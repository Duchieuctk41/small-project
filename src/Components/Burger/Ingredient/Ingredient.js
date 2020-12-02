import React from 'react';
import classes from './Ingredient.css';

const Ingredient = props => {
    let ingredient = null;
    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('bread-meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('bread-cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('bread-salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ('bread-bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
};

export default Ingredient;

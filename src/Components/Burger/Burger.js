import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import classes from './Burger.css';

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <Ingredient key={igKey + i} type={igKey} />
        });
    })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    if (transformedIngredients.length === 0) {
       transformedIngredients = <p>Chọn thêm thành phần đi thằng lozz</p>;
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default Burger;

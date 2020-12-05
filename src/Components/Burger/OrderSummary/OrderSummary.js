import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../../UI/Button/Button';

const orderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })

    return (
        <Aux>
            <p>Your order</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><span style={{fontWeight: 'bold'}}>Total price: {props.price.toFixed(2)}</span></p>
            <Button btnType="Danger" clicked={props.canceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.continued}>Continue</Button>
        </Aux>
    );
}

export default orderSummary;

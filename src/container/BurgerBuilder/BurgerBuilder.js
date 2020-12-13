import React, { useState} from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    meat: 0.6,
    cheese: 0.4
}

const burgerBuilder = () => {

    const [ingredients, setIngredients] = useState({
        salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
    });

    const [totalPrice, setTotalPrice] = useState(1);
    const [purchasing, setPurchasing] = useState(false);

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...ingredients
        }

        updateIngredients[type] = updateCount;

        const addPrice = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + addPrice;

        setTotalPrice(newPrice);
        setIngredients(updateIngredients);

    }

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...ingredients
        }
        updateIngredients[type] = updateCount;

        const removePrice = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - removePrice;

        setTotalPrice(newPrice);
        setIngredients(updateIngredients);
    }

    const orderedHandler = () => {
        setPurchasing(true);
    };

    const cancelOrderdHandler = () => {
        setPurchasing(false);
    };

    const continueOrderHandler = () => {
        alert('order cai loz');
    };


    const disabledHandler = {
        ...ingredients
    }

    for (let key in disabledHandler) {
        disabledHandler[key] = disabledHandler[key] <= 0;
    }
        
        return (
            <Aux>
                <Modal show={purchasing} modalClosed={cancelOrderdHandler}>
                    <OrderSummary 
                        ingredients={ingredients} 
                        price={totalPrice}
                        canceled={cancelOrderdHandler}
                        continued={continueOrderHandler} />
                </Modal>
                <Burger ingredients={ingredients}/>
                <BuildControls 
                    ingredientAdded={addIngredientHandler}
                    ingredientRemoved={removeIngredientHandler}
                    disabled={disabledHandler}
                    price={totalPrice}
                    ordered={orderedHandler}
                />
            </Aux>
        );
}

export default burgerBuilder;

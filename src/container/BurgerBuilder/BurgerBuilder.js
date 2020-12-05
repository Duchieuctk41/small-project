import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';
import Ingredient from '../../Components/Burger/Ingredient/Ingredient';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    meat: 0.6,
    cheese: 0.4
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 1,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }

        updateIngredients[type] = updateCount;

        const addPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;

        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;

        const removePrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - removePrice;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });
    }

    orderedHandler = () => {
        this.setState({purchasing: true});
    };

    cancelOrderdHandler = () => {
        this.setState({purchasing: false});
    };

    continueOrderHandler = () => {
        alert('order cai loz');
    };

    render () {

        const disabledHandler = {
            ...this.state.ingredients
        }

        for (let key in disabledHandler) {
            disabledHandler[key] = disabledHandler[key] <= 0;
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.cancelOrderdHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        price={this.state.totalPrice}
                        canceled={this.cancelOrderdHandler}
                        continued={this.continueOrderHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledHandler}
                    price={this.state.totalPrice}
                    ordered={this.orderedHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;

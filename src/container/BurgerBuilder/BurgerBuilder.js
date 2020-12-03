import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }

        updateIngredients[type] = updateCount;

        this.setState({
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
        this.setState({
            ingredients: updateIngredients
        });
    }

    render () {

        const disabledHandler = {
            ...this.state.ingredients
        }

        for (let key in disabledHandler) {
            disabledHandler[key] = disabledHandler[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;

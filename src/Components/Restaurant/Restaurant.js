import React, { useState, useEffect } from 'react';
import Button from '../../UI/ButtonRestaurant/Button';
import Statics from './Statics/Statics';
import Aux from '../../hoc/Aux';

const typeButton = [
    {label: 'Good', type: 'good'},
    {label: 'Medium', type: 'medium'},
    {label: 'Bad', type: 'bad'}
]

const restaurant = (props) => {

    const [voteds, setVoteds] = useState({
        good: 0,
        medium: 0,
        bad: 0
    });

    useEffect(() => {

    })

    const handlerClicked = (type) => {
        const oldCount = voteds[type];
        const updateCount = oldCount + 1;
        const updateVoteds = {
            ...voteds
        }
        updateVoteds[type] = updateCount;
        setVoteds(updateVoteds);
    }

    return (
        <Aux>
            <h3>Nhà hàng 5 sao!!</h3>
            {typeButton.map(ctrl => (
                <Button key={ctrl.label} clicked={() => handlerClicked(ctrl.type)}>
                    {ctrl.label}
                </Button>
            ))}
            <h3>Thống kê</h3>
            <Statics>Good: {voteds.good}</Statics>
            <Statics>Medium: {voteds.medium}</Statics>
            <Statics>Bad: {voteds.bad}</Statics>
        </Aux>
    )
}

export default restaurant;

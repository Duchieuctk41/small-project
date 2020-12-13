import React, { useState, useEffect } from 'react';
import Button from '../../UI/ButtonRestaurant/Button';
import Statics from './Statics/Statics';
import Aux from '../../hoc/Aux';
import Input from '../../UI/Input/Input';

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

    let votedOfUser = Object.keys(voteds)
    .map(voted => {
        if (voteds[voted] > 0) {
        return <Statics key={voted}>{voted} : {voteds[voted]}</Statics>
        }  
    })
    .reduce((array, element) => {
        if (element !== undefined) {
            return array.concat(element);
        }
        return array;
    }, []);

    if(votedOfUser.length === 0) {
        votedOfUser = <Statics>Có con cằc đánh giá nào đâu!</Statics>
    }

    return (
        <Aux>
            <h3>Nhà hàng 5 sao!!</h3>
            {typeButton.map(ctrl => (
                <Button key={ctrl.label} clicked={() => handlerClicked(ctrl.type)}>
                    {ctrl.label}
                </Button>
            ))}
            <Input review="cai lozz"/>
            <h3>Thống kê</h3>
            {votedOfUser}
            <h3>Đánh giá của khách hàng</h3>
        </Aux>
    )
}

export default restaurant;

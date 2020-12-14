import React, { useState, useEffect } from 'react';
import Button from '../../UI/ButtonRestaurant/Button';
import Statics from './Statics/Statics';
import Aux from '../../hoc/Aux';
import Input from '../../UI/Input/Input';
import Comment from './Comment/Comment';
import Summit from './Button/Button';

import classes from './Restaurant.css';

const typeButton = [
    {label: 'Good', type: 'good'},
    {label: 'Medium', type: 'medium'},
    {label: 'Bad', type: 'bad'}
]

const restaurant = () => {

    const [voteds, setVoteds] = useState({
        good: 0,
        medium: 0,
        bad: 0
    });
    
    const [status, setStatus] = useState("");
    const [listStatus, setListStatus] = useState([
        {status: "Bình luận của khách hàng"}
    ]);

    const [summary, setSummay] = useState({
        all: 0,
        average: 0,
        positive: 0
    })
    const placeholder = "Bình luận sản phẩm đi";

    // useEffect(() => {
    //         summary.all = voteds.good + voteds.medium + voteds.bad;
    //         summary.average = (voteds.good - voteds.bad) / 3;
    //         summary.positive = voteds.good / summary.all * 100
    //         console.log(summary);
    // })



    const handlerClicked = (type) => {
        const oldCount = voteds[type];
        const updateCount = oldCount + 1;
        const updateVoteds = {
            ...voteds
        }
        updateVoteds[type] = updateCount;
        setVoteds(updateVoteds);
        const valueOfAll = updateVoteds.good + updateVoteds.medium + updateVoteds.bad;
        const newAll = {
            all: valueOfAll,
            average: (updateVoteds.good - updateVoteds.bad) / 3,
            positive: updateVoteds.good / valueOfAll * 100
        }
        setSummay(newAll);
    }

    const commentHandler = () => {
        const statused = status;
        const newListStatus = [...listStatus];
        if (status !== "") {
            newListStatus.push({status: statused});
            setListStatus(newListStatus);
            setStatus("");
        }

        
    }

    let listComment = listStatus.map(status => {
        console.log(status.status);
        if (listStatus.length > 0) {
            return <Comment key={status.status}>{status.status}</Comment>;
        }
    });

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

    let summaryOfUser = Object.keys(summary)
    .map(summa => {
        if(summary.all > 0) {
        return <Statics key={summa}>{summa}: {summary[summa]}</Statics>
        }
    })

    return (
        <Aux className={classes.Restaurant}>
            <h2 className={classes.color}>Nhà hàng 5 sao!!</h2>
            {typeButton.map(ctrl => (
                <Button key={ctrl.label} clicked={() => handlerClicked(ctrl.type)}>
                    {ctrl.label}
                </Button>
            ))}
            
            <h3>Thống kê</h3>
            {votedOfUser}
            {summaryOfUser}
            <h3>Đánh giá của khách hàng</h3>
            <Input placeholder={placeholder} statuss={status} changed={(event) => setStatus(event.target.value)}/>
            <Summit summited={commentHandler}>Comment</Summit>
            {listComment}
        </Aux>
    )
}

export default restaurant;

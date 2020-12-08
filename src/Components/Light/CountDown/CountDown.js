import React from 'react';

import classes from './CountDown.css';

const countDown = props => (
    <span className={classes.CountDown}>{props.inTime}</span>
    );

export default countDown;

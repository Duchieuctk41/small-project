import React from 'react';
import CountDown from './CountDown/CountDown';

import classes from './Light.css';

const light = (props) => (
    <div className={classes.Light}>
        <CountDown />
    </div>
);

export default light;

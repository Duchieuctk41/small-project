import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <button>More</button>
        <button>Less</button>
    </div>
);

export default buildControl;

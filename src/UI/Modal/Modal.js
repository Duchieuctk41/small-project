import React from 'react';
import classes from './Modal.css';

const modal = props => (
    <div 
        className={classes.Modal}
        style={{transform: props.show ? 'translateY(0)' : 'translate(1100vh)'}}>
        {props.children}
    </div>
);

export default modal;

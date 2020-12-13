import React from 'react';

import classes from './Comment.css';

const comment = (props) => (
    <h3 className={classes.Comment}>
        {props.children}
    </h3>
);

export default comment;

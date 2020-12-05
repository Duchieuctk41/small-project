import React, { Component } from 'react';
import Aux from '../Aux';

import Toolbar from '../../UI/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

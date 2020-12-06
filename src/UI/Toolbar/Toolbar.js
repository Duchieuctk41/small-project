import React from 'react';
import classes from './Toolbar.css';
import SideDrawerToggle from '../../Components/SideDrawerToggle/SideDrawerToggle';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <SideDrawerToggle clicked={props.clickedSideToggle} />
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;

import React from 'react';
import classes from './Button.css';

const button = props => {
    let btnClasses = classes.Button;
    if (props.showPerson) {
        console.log("loz");
        btnClasses = classes.Red;
    }

    return (
        <button className={btnClasses} onClick={props.clicked}>Click me</button>
    );
}

export default button;

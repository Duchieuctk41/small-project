import React from 'react';
import CountDown from './CountDown/CountDown';

import classes from './Light.css';

const light = props => {
    let divLight = null;
    let arrayClass = [classes.Light];
    switch (props.nowColor) {
        case 'red':
            arrayClass = [classes.Light, classes.Red];
            divLight = <div className={arrayClass.join(' ')}><CountDown /></div>;
            break;
        case 'green':
            arrayClass = [classes.Light, classes.Green];
            divLight = <div className={arrayClass.join(' ')}><CountDown /></div>;
            break;
        case 'yellow':
                arrayClass = [classes.Light, classes.Yellow];
                divLight = <div className={arrayClass.join(' ')}><CountDown /></div>;
                break;
        default:
            divLight = <div className={arrayClass.join(' ')}><CountDown /></div>;
            break;
    }
    return divLight;
}

export default light;

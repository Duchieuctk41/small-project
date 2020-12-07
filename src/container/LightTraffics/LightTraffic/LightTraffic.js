import React from 'react';

import classes from './LightTraffic.css';

const lightTraffic = props => {
    let light = null;
    let arrayClass = [classes.Circle, classes.Green];
    switch (props.typeColor) {
        case 'Green':
            light = <div className={arrayClass.join(' ')}></div>;
            break;
        case 'Yellow':
            arrayClass = [classes.Circle, classes.Yellow]
            light = <div className={arrayClass.join(' ')}></div>;
            break;
        case 'Red':
            arrayClass = [classes.Circle, classes.Red]
            light = <div className={arrayClass.join(' ')}></div>;
            break;
        default: 
            light = null;
    }
    return light;

}
export default lightTraffic;

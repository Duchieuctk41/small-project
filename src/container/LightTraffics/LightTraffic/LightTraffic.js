import React from 'react';

import classes from './LightTraffic.css';

const lightTraffic = props => {

    let trafficStyle = null;
    let arrayClass = [classes.Circle, classes.red];

    switch (props.styleColor) {
        case 'red':
            trafficStyle = <div className={arrayClass.join(' ')}></div>
            console.log('do');
            break;
        case 'yellow':
            arrayClass = [classes.Circle, classes.yellow];
            trafficStyle = <div className={arrayClass.join(' ')}></div>
            console.log('vang');
            break;
        case 'green':
            arrayClass = [classes.Circle, classes.green];
            trafficStyle = <div className={arrayClass.join(' ')}></div>
            console.log('xanh');
            break;
        case 'black':
            arrayClass = [classes.Circle, classes.black];
            trafficStyle = <div className={arrayClass.join(' ')}></div>
            break;
        default:
            trafficStyle = null;
        }
    return trafficStyle;
}
export default lightTraffic;

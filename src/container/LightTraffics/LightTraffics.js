import React, { Component } from 'react';
import LightTraffic from './LightTraffic/LightTraffic';


import classes from './LightTraffics.css';

class LightTraffics extends Component {
    render () {
        return (
            <div className={classes.Light}>
                <LightTraffic typeColor="Green" />
                <LightTraffic typeColor="Yellow" />
                <LightTraffic typeColor="Red" />
            </div>
        );
    }
}

export default LightTraffics;

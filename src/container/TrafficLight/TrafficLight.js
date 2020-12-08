import React, { Component } from 'react';
import Light from '../../Components/Light/Light';

import classes from './TrafficLight.css';

class TrafficLight extends Component {
    render () {
        return (
            <div className={classes.TrafficLight}>
                <Light />
                <Light />
                <Light />
            </div>
        );
    }
}

export default TrafficLight;

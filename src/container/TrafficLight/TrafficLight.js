import React, { Component } from 'react';
import Light from '../../Components/Light/Light';

import classes from './TrafficLight.css';

class TrafficLight extends Component {
    state={
        typeColor : [
            {red: "red", timeRed: 10},
            {yellow: "yellow", timeYellow: 5},
            {green: "green", timeGreen: 8}
        ],
        now: "red",
        next: "green"
    }

    render () {
        return (
            <div className={classes.TrafficLight}>
                <Light nowColor={this.state.typeColor[0].red}/>
                <Light nowColor={this.state.typeColor[1].green}/>
                <Light nowColor={this.state.typeColor[2].yellow}/>
            </div>
        );
    }
}

export default TrafficLight;

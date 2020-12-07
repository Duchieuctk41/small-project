import React, { Component } from 'react';
import LightTraffic from './LightTraffic/LightTraffic';


import classes from './LightTraffics.css';

class LightTraffics extends Component {
    
  state={
    red: "red", 
    yellow: "yellow", 
    green: "green",
    next: "yellow"
  }
    setInterval ()  {
        this._timeout = setTimeout(function () {
        this.changeHandle();
    }.bind(this), 500); 
    }

        componentDidMount() {
        this.setInterval(this.tick, 500);
    }

    componentWillUnmount()  {
        clearInterval(this._timeout);
    }


    changeHandle() {
        switch (this.state.next) {
        case "red":
                this.setState({
            red:"red", 
            yellow: "black", 
            green: "black",
            next: "yellow"
        });
        break;
        case "yellow":
        this.setState({
            red:"black", 
            yellow: "yellow", 
            green: "black",
            next: "green"
        });
        break;
        case "green":
        this.setState({
            red:"black", 
            yellow: "black", 
            green: "green",
            next: "red"
        });
        break;
    }
        
            this._timeout = setTimeout(function () {
            this.changeHandle();
        }.bind(this), 5000);
    }

    render () {
    return (
    <div className={classes.Light}>
            <LightTraffic styleColor={this.state.red} />
            <LightTraffic styleColor={this.state.yellow} />
            <LightTraffic styleColor={this.state.green} />
    </div>
    );
}
}

export default LightTraffics;

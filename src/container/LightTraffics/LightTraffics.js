import React, { Component } from 'react';
import LightTraffic from './LightTraffic/LightTraffic';


import classes from './LightTraffics.css';

class LightTraffics extends Component {
    
  state={
      typecolor: [
        {red: "red", timered: 10}, 
        {yellow: "yellow", timeyellow: 5}, 
        {green: "green", timegreen: 8}
    ],
        now: "red",
        next: "yellow"
  }
    
  
    setInterval() {
        this._timeout = setTimeout(function() {
          this.changeHandler();
        }.bind(this), 1000)
    };

    componentDidMount() {
        this.setInterval(this.tick, 500);
    }

    componentWillMount() {
        clearInterval(this._timeout);
    }


    changeHandler () {
        switch (this.state.next) {
            case 'red':
                this.setState({
                    red: "red", 
                    yellow: "black", 
                    green: "black",
                    now: "red",
                    next: "yellow"
                });
                let dem = this.state.typecolor[0].timered;
                this.setState({timered: dem});
                let time = setInterval(() => {
                    this.setState({timered: --dem});
                }, 1000);
                
                this._timeout = setTimeout(function () {
                    this.changeHandler();
                    clearInterval(time);
                }.bind(this), 10000);
                    
                break;
            case 'yellow':
                this.setState({
                    red: "black", 
                    yellow: "yellow", 
                    green: "black",
                    now: "yellow",
                    next: "green"
                });
                dem = this.state.typecolor[1].timeyellow;
                this.setState({timeyellow: dem});
                time = setInterval(() => {
                    this.setState({timeyellow: --dem});
                }, 1000);

                this._timeout = setTimeout(function () {
                    this.changeHandler();
                    clearInterval(time);
                }.bind(this), 5000);
                break;
            case 'green':
                this.setState({
                    red: "black", 
                    yellow: "black", 
                    green: "green",
                    now: "green",
                    next: "red"
                });
                dem = this.state.typecolor[2].timegreen;
                this.setState({timegreen: dem});
                time = setInterval(() => {
                    this.setState({timegreen: --dem});
                }, 1000);
                this._timeout = setTimeout(function () {
                    this.changeHandler();
                    clearInterval(time);
                }.bind(this), 8000);
                break;
        }
    }
    render () {
        let colorLightTraffic = <div>cha co cai loz gi</div>;
        
        if (this.state.now == "red") {
                colorLightTraffic = <div className={classes.Light}>
                                    <LightTraffic styleColor={this.state.red}>
                                        <p className={classes.TextWhite}>{this.state.timered}</p>
                                    </LightTraffic>
                                    <LightTraffic styleColor={this.state.yellow}>
                                        <p className={classes.Text}>{this.state.timeyellow}</p>
                                    </LightTraffic>
                                    <LightTraffic styleColor={this.state.green}>
                                        <p className={classes.Text}>{this.state.timegreen}</p>
                                    </LightTraffic>    
                                </div>;
        }
        if (this.state.now == "yellow") {
            colorLightTraffic = <div className={classes.Light}>
                                    <LightTraffic styleColor={this.state.red}>
                                        <p className={classes.Text}>{this.state.timered}</p>
                                    </LightTraffic>
                                    <LightTraffic styleColor={this.state.yellow}>
                                        <p className={classes.TextWhite}>{this.state.timeyellow}</p>
                                    </LightTraffic>
                                    <LightTraffic styleColor={this.state.green}>
                                        <p className={classes.Text}>{this.state.timegreen}</p>
                                    </LightTraffic>    
                                </div>;
        }

        if (this.state.now == "green") {
            colorLightTraffic = <div className={classes.Light}>
                                    <LightTraffic styleColor={this.state.red}>
                                        <p className={classes.Text}>{this.state.timered}</p>
                                    </LightTraffic>
                                    <LightTraffic styleColor={this.state.yellow}>
                                        <p className={classes.Text}>{this.state.timeyellow}</p>
                                    </LightTraffic>
                                    <LightTraffic styleColor={this.state.green}>
                                        <p className={classes.TextWhite}>{this.state.timegreen}</p>
                                    </LightTraffic>    
                                </div>;
        }
    return colorLightTraffic;
    }
}


export default LightTraffics;

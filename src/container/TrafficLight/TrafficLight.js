import React, { Component } from 'react';
import Light from '../../Components/Light/Light';

import classes from './TrafficLight.css';

class TrafficLight extends Component {
    state={
        red: "",
        green: "",
        yellow: "",
        time: 0,
        now: "",
        next: "green"
    }
    setInterval() {
        this._timeout = setTimeout(() => {
            this.changeHandler();
        }, 500);
    };

    componentDidMount () {
        this.setInterval(this.tick, 500);
    }

    componentWillMount () {
        clearInterval(this._timeout);
    }

    changeHandler () {
        switch (this.state.next) {
            case 'red':
                let timeCountDown = 10;
                this.setState({
                    red: "red",
                    green: "",
                    yellow: "",
                    now: "red",
                    time: timeCountDown,
                    next: "green"
                });
                timeCountInterval = setInterval(() => {
                    this.setState({
                        time: --timeCountDown
                    })
                }, 1000);
                this._timeout = setTimeout(function () {
                    this.changeHandler();
                    clearInterval(timeCountInterval);
                }.bind(this), 10000);
                break;
                case 'green':
                    timeCountDown = 8;
                    this.setState({
                        red: "",
                        green: "green",
                        yellow: "",
                        now: "green",
                        time: timeCountDown,
                        next: "yellow"
                    });
                    let timeCountInterval = setInterval(() => {
                        this.setState({
                            time: --timeCountDown
                        })
                    }, 1000);
                    this._timeout = setTimeout(function () {
                        this.changeHandler();
                        clearInterval(timeCountInterval);
                    }.bind(this), 8000);
                   
                    break;
                    case 'yellow':
                        timeCountDown = 5;
                        this.setState({
                            red: "",
                            green: "",
                            yellow: "yellow",
                            now: "yellow",
                            time: timeCountDown,
                            next: "red"
                        });
                        timeCountInterval = setInterval(() => {
                            this.setState({
                                time: --timeCountDown
                            })
                        }, 1000);
                        this._timeout = setTimeout(function () {
                            this.changeHandler();
                            clearInterval(timeCountInterval);
                        }.bind(this), 5000);
                        break;          
        }
    }
    render () {

        let arrayClass = [classes.TrafficLight];

        switch(this.state.now) {
            case 'red':
                arrayClass = [classes.TrafficLight, classes.Blue];
                break;
            case 'green':
                arrayClass = [classes.TrafficLight, classes.Violet];
                break;
            case 'yellow':
                arrayClass = [classes.TrafficLight, classes.Salmon];
                break;
            
        }
        return (
            <div className={arrayClass.join(' ')}>
                <Light nowColor={this.state.red} inTime={this.state.time}/>
                <Light nowColor={this.state.green} inTime={this.state.time}/>
                <Light nowColor={this.state.yellow} inTime={this.state.time}/>
            </div>
        );
    }
}

export default TrafficLight;

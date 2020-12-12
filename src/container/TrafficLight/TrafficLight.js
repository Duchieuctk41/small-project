import React, { useState, useEffect } from 'react';
import Light from '../../Components/Light/Light';

import classes from './TrafficLight.css';

let lightDurations = 500;

const trafficLight = () => {
  const [clicks, setColorIndex] = useState({
    red: "",
    green: "",
    yellow: "",
    now: "red",
    next: "green"
  });

  useEffect(() => {
      
    const timer = setTimeout(() => {
        changeHandler();
    }, lightDurations);
    return () => {
      clearTimeout(timer);
    };
  });

  function changeHandler () {
    switch (clicks.next) {
        case 'red':
            let timeCountDown = 10;
            let newColor = {
                red: "red",
                green: "",
                yellow: "",
                now: "red",
                time: timeCountDown,
                next: "green"
            };
            lightDurations = 3000;
            setColorIndex(newColor);
            break;
            case 'green':
                timeCountDown = 8;
                newColor = {
                    red: "",
                    green: "green",
                    yellow: "",
                    now: "green",
                    time: timeCountDown,
                    next: "yellow"
                };
                lightDurations = 2000;
                setColorIndex(newColor);
                break;
                case 'yellow':
                    timeCountDown = 5;
                    newColor = {
                        red: "",
                        green: "",
                        yellow: "yellow",
                        now: "yellow",
                        time: timeCountDown,
                        next: "red"
                    };
                    lightDurations = 1000;
                    setColorIndex(newColor);
                    break;          
    }
  }

let arrayClass = [classes.TrafficLight];

switch(clicks.now) {
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
        <Light nowColor={clicks.red} inTime={clicks.time}/>
        <Light nowColor={clicks.green} inTime={clicks.time}/>
        <Light nowColor={clicks.yellow} inTime={clicks.time}/>
    </div>
);
};

export default trafficLight;

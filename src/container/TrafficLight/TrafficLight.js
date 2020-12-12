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
    time: 0,
    next: "green"
  });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeout(() => {
            changeHandler();
        }, lightDurations);
        setCounter(counter - 1);
        console.log(counter);
    }, 1000);

    return () => {
        if (counter === 1) {
            setCounter(0);
        }
      clearInterval(timer);
    };
  }, [counter]);

  function changeHandler () {
    switch (clicks.next) {
        case 'red':
            let timeCountDown = 1;
            lightDurations = 1000;
            let newColor = {
                    red: "red",
                    green: "",
                    yellow: "",
                    now: "red",
                    time: timeCountDown,
                    next: "green"
                    
            };
            setColorIndex(newColor);
            setCounter(timeCountDown);
            console.log("doooooooooooooooo");
            
            break;
            case 'green':
                timeCountDown = 3;
                lightDurations = 3000;
                newColor = {
                    red: "",
                    green: "green",
                    yellow: "",
                    now: "green",
                    time: timeCountDown,
                    next: "yellow"
                    
                };
                setColorIndex(newColor);
                setCounter(timeCountDown);

                break;
                case 'yellow':
                    timeCountDown = 2;
                    lightDurations = 2000;
                    newColor = {
                        red: "",
                        green: "",
                        yellow: "yellow",
                        now: "yellow",
                        time: timeCountDown,
                        next: "red",
                        
                    };
                    setColorIndex(newColor);
                    setCounter(timeCountDown);
                    console.log("vangggggggggggg");
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
        <Light nowColor={clicks.red} inTime={counter}/>
        <Light nowColor={clicks.green} inTime={counter}/>
        <Light nowColor={clicks.yellow} inTime={counter}/>
    </div>
);
};

export default trafficLight;

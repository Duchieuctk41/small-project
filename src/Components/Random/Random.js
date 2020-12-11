import React, { useState } from 'react';
import Input from './Input/Input';
import Result from './Result/Result';

const random = () => {
    const [clicks, setClicks] = useState({
        min: 0,
        max: 100,
        result: 1
    })
    const clickHandler = (min, max) => {
        let result1 = Math.floor(min + (Math.random()) * (max-min));

        const newClicks = { 
            min: clicks.min, 
            max: clicks.max,
            result: result1 
          }
          setClicks(newClicks);
        
    }

    const handleClick = () => {
        console.log('this is:', clicks);
      }
      handleClick();

    
        return (
            <div>
                <h3>Random</h3>
                <label>Min</label>
                <Input reference={clicks.min} changed={(event) => setClicks({min: +event.target.value, max: clicks.max, result: clicks.result})}/>
                <label>Max</label>
                <Input reference={clicks.max} changed={(event) => setClicks({min: clicks.min, max: +event.target.value, result: clicks.result})}/>
                <button 
                    onClick={() => clickHandler(clicks.min, clicks.max)}>
                        Click me
                </button>
                <Result>{clicks.result}</Result>
            </div>
        );
}

export default random;

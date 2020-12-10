import React, { useState } from 'react';
import Input from './Input/Input';
import Result from './Result/Result';

function Random() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [result, setResult] = useState(1);
    const clickHandler = (min, max) => {
        let result1 = Math.floor(min + (Math.random()) * (max-min));
        console.log(result1);
        setResult(result1);
        console.log(min);
        console.log(result);
        
    }

    const handleClick = () => {
        console.log('this is:', this);
      }

    
        return (
            <div>
                <h3>Random</h3>
                <label>Min</label>
                <Input reference={min} />
                <label>Max</label>
                <Input reference={max} />
                <button 
                    onClick={() => clickHandler(min, max)}>
                        Click me
                </button>
                <Result>{result}</Result>
            </div>
        );
}

export default Random;

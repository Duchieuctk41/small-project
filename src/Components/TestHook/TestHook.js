import React, {useState} from 'react';

function Example() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Ban click vao day {count} lan</p>
            <button onClick={() => setCount(count + 1)} >Click me</button>
        </div>
    )
}


export default Example;

import React, {useState, useEffect} from 'react';

const example = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `You clicked ${count} times`;
        return () => {
            if (count == 10) {
                setCount(0);
            }
        };
    });

    return (
        <div>
            <p>ban da clicked {count} lan</p>
            <button onClick={() => setCount(count + 1)} >Click me</button>
        </div>
    )
}


export default example;

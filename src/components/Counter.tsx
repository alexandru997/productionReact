import React, {useState} from 'react';
import './Counter.scss';

export const Counter = () => {
    const [add, setAdd] = useState(0)


    const addNumb = () => {
        setAdd(add + 1)
    }
    return (
        <div>
            <h1>{add}</h1>
            <button onClick={addNumb}>increment</button>
        </div>
    );
};


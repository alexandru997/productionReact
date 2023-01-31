import React from 'react';
import {Counter} from "./components/Counter";
import './index.scss';

const App = () => {
    return (
        <div className='app'>
            Alphabet
            <Counter/>
        </div>
    );
};

export default App;

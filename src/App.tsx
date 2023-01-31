import React from 'react';
import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>HomePage</Link>
            <Link to={'/about'}>AboutUS</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

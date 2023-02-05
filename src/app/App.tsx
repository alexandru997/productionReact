import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRoute from "./providers/router/ui/AppRoute";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>HomePage</Link>
            <Link to={'/about'}>AboutUS</Link>
            <AppRoute/>
        </div>
    );
};

export default App;

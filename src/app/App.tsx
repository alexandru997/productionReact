import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRoute from "./providers/router/ui/AppRoute";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRoute/>
        </div>
    );
};

export default App;

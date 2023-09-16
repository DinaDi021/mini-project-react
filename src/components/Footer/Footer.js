import React from "react";
import {useEffect, useState} from "react";

import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";

const Footer = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light');

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('app-theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="footer">
            <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
};

export {Footer};
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitch = ({ theme, toggleTheme }) => {
    const handleToggle = (newTheme) => {
        toggleTheme(newTheme);
    };

    return (
        <div className="themeTwitchContainer">
            <button
                className={`theme-switch-button ${theme === 'light' ? 'active' : ''}`}
                onClick={() => handleToggle('light')}
            >
                <FaSun />
            </button>
            <button
                className={`theme-switch-button ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => handleToggle('dark')}
            >
                <FaMoon />
            </button>
        </div>
    );
};


export {ThemeSwitch};

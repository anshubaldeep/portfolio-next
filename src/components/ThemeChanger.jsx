import React, { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import 'react-toggle/style.css';

function ThemeChanger() {
  const [themeState, setThemeState] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      setDarkMode(true);
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      // setThemeState(true);
    } else {
      setDarkMode(false);
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      // setThemeState(false);
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (!getTheme) { setDarkMode(true); return document.body.classList.add('dark-mode'); }
    if (getTheme === 'dark') { setDarkMode(true); return document.body.classList.add('dark-mode'); }
    if (getTheme === 'light') { setDarkMode(false); return document.body.classList.add('light-mode'); }
  }, []);

  return (
    <div className="text-center">
      <Toggle
        checked={darkMode}
        // defaultChecked={defaultTheme}
        aria-label="No label tag"
        onChange={handleChange}
        icons={{
          checked: <FontAwesomeIcon icon={faMoon} />,
          unchecked: <FontAwesomeIcon icon={faSun} />,
        }}
        className="theme-toggle"
      />
    </div>
  );
}

export default ThemeChanger;

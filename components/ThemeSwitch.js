import { useState } from 'react';
import DarkTheme from './DarkTheme';

const loadDarkMode = () => {
  // will run on the server there no localStorage
  if (typeof localStorage === 'undefined') {
    return false;
  }
  const value = localStorage.getItem('darkMode');
  return value === null ? false : JSON.parse(value);
};

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  console.log('[ThemeSwitch] darkMode:', darkMode);
  const text = darkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <>
      <button onClick={() => handleClick()} suppressHydrationWarning>
        {text}
      </button>
      ;
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: inherit;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  );
};
export default ThemeSwitch;

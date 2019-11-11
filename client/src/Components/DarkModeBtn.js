import React from 'react';
import { useDarkMode } from "../Hooks/useDarkMode";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
        <div onClick={toggleMode}>Dark Mode</div>
    </div>
  );
};

export default DarkModeBtn;
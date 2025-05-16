import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  
  const buttonBgColor = theme === 'light' ? 'bg-accentYellow' : 'bg-very-dark-gray';
  const buttonTextColor = theme === 'light' ? 'text-very-dark-gray' : 'text-accentYellow';

  return (
    <button
      onClick={toggleTheme}
      
      className={`p-2 rounded-md flex items-center
                  ${buttonBgColor} ${buttonTextColor}
                  hover:opacity-80 transition-colors`}
    >
      {theme === 'light' ? (
        <FaMoon className="mr-2" />
      ) : (
        <FaSun className="mr-2" />
      )}

      {theme === 'light' ? 'Tamsu' : 'Šviesu'}
    </button>
  );
}

export default ThemeToggle;
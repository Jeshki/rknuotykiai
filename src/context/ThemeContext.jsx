import React, { useState, useEffect } from 'react';
import { ThemeContext } from './useTheme.js';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    const body = document.body;

    body.classList.add('min-h-screen', 'flex', 'flex-col', 'font-advent-pro', 'transition-colors', 'duration-300');

    if (theme === 'light') { // Šviesus režimas
      body.classList.add('bg-emerald-950', 'text-slate-100');
      body.classList.remove('bg-emerald-950'); // Ensure removal of previous dark mode background
      body.classList.remove('bg-green-900', 'text-slate-50'); // Ensure removal of old dark mode classes
    } else { // Tamsus režimas
      body.classList.add('bg-emerald-950', 'text-slate-100'); // Set dark mode background to emerald-950 and text to slate-100
      body.classList.remove('bg-green-900', 'text-slate-100'); // Remove light mode background and text if present
      body.classList.remove('bg-neutral-200', 'text-gray-800'); // Remove any other conflicting classes
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

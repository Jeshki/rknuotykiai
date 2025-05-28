import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    const body = document.body;

    body.classList.add('min-h-screen', 'flex', 'flex-col', 'font-advent-pro', 'transition-colors', 'duration-300');

    if (theme === 'dark') {
      body.classList.add('dark', 'bg-green-900', 'text-slate-100'); // Pakeista iš bg-green-700 į bg-green-900
      body.classList.remove('light', 'bg-neutral-200', 'text-gray-800');
    } else {
      body.classList.add('light', 'bg-neutral-200', 'text-gray-800');
      body.classList.remove('dark', 'bg-green-900', 'text-slate-100'); // Pakeista iš bg-green-700 į bg-green-900
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
}

export default ThemeProvider;
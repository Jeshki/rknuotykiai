import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  // Mygtuko spalvos: emerald-950 light režime, emerald-950 dark režime
  const buttonBgColor = theme === 'light' ? 'bg-emerald-950' : 'bg-emerald-950';
  // Teksto spalva: visada slate-100
  const buttonTextColor = 'text-slate-100';

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md flex items-center
                  ${buttonBgColor} ${buttonTextColor}
                  hover:opacity-80 transition-colors`}
    >
      {theme === 'light' ? (
        <Moon className="mr-2" />
      ) : (
        <Sun className="mr-2" />
      )}

      {theme === 'light' ? 'Tamsu' : 'Šviesu'}
    </button>
  );
}

export default ThemeToggle;
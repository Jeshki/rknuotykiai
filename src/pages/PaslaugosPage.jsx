/* src/pages/PaslaugosPage.jsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function PaslaugosPage() {
  const { theme } = useTheme();

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-slate-900';
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center justify-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Paslaugų puslapis</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl">Čia bus pateikiamos siūlomos paslaugos.</p>
    </div>
  );
}

export default PaslaugosPage;
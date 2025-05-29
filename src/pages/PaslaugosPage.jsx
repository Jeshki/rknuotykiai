import React from 'react';
import { useTheme } from '../context/ThemeContext';

function PaslaugosPage() {
  const { theme } = useTheme();

  // Fono spalva: emerald-950 light režime, emerald-950 dark režime
  const pageBgColor = theme === 'light' ? 'bg-slate-100' : 'bg-slate-50';
  // Teksto spalva: visada slate-100
  const pageTextColor = theme === 'light' ? 'text-emerald-950' : 'text-green-900' ;

  return (
    <div className={`flex flex-col items-center justify-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Paslaugų puslapis</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl">Čia bus pateikiamos siūlomos paslaugos.</p>
    </div>
  );
}

export default PaslaugosPage;
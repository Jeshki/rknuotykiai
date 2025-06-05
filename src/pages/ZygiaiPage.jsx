/* src/pages/ZygiaiPage.jsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import zygiaiData from '../data/zygiaiData';
import ZygisCard from '../components/ZygisCard';

const ZygiaiPage = () => {
  const { theme } = useTheme();

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-700'; // Pakeista iš bg-slate-900
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center p-4 md:p-8 text-center ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Buvusių žygių galerijos</h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">Atraskite mano nuotykius ir įspūdžius iš praeities žygių!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pb-8 w-full">
        {zygiaiData.map((zygis) => (
          <ZygisCard key={zygis.id} zygis={zygis} />
        ))}
      </div>
    </div>
  );
};

export default ZygiaiPage;
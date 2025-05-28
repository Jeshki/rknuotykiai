import React from 'react';
import { useTheme } from '../context/ThemeContext';
import videoBackground from '../assets/rknuotykiai.mp4';

const ApieManePage = () => {
  const { theme } = useTheme();

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-900'; // Pakeista iš bg-green-700 į bg-green-900
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center ${pageBgColor} ${pageTextColor} w-full`}>
      <div className="relative w-full h-[70vh] overflow-hidden flex justify-center items-center mb-5">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover top-0 left-0 z-10">
          <source src={videoBackground} type="video/mp4" />
          Tavo naršyklė nepalaiko vaizdo įrašų.
        </video>
        <div className="relative z-20 text-white text-center bg-black bg-opacity-40 p-5 rounded-lg">
          <h3 className="text-3xl font-bold">"Čia RK nuotykiu Video"</h3>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Apie mane</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Esu Rolandas, keliautojas iš prigimties, nuotykių ieškotojas ir gamtos mylėtojas.
          Mano tikslas – parodyti, kad žygiai yra daugiau nei tik ėjimas. Tai – galimybė pažinti save,
          atrasti neįtikėtinus Lietuvos kampelius ir pasisemti energijos iš gamtos.
          Prisijunkite prie mano nuotykių!
        </p>
      </div>
    </div>
  );
};

export default ApieManePage;
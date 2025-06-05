// src/pages/AtsiliepimaiPage.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Star, UserCircle, CalendarDays } from 'lucide-react'; 
import { Link } from 'react-router-dom';// Pridedame ikonas

// Įkeliame pavyzdinius atsiliepimus (arba importuojame iš atskiro failo)
const atsiliepimai = [
  {
    id: 1,
    autorius: "Lina K.",
    data: "2024-10-15",
    tekstas: "Tai buvo mano pirmas žygis su Rolandu ir tikrai ne paskutinis! Nuostabūs vaizdai, puikiai suplanuotas maršrutas ir labai draugiška atmosfera. Rolandas – tikras savo srities profesionalas, papasakojo daug įdomių dalykų. Rekomenduoju visiems, norintiems aktyviai praleisti laiką gamtoje!",
    ivertinimas: 5,
    zygioPavadinimas: "Rudens spalvų žygis Aukštaitijoje"
  },
  {
    id: 2,
    autorius: "Tomas V.",
    data: "2024-09-22",
    tekstas: "Puikus žygis! Nebuvo lengva, bet įveikus trasą jausmas nepakartojamas. Rolandas puikiai motyvavo ir palaikė visus grupės narius. Labai patiko organizuotumas ir aiškiai pateikta informacija prieš žygį. Ačiū!",
    ivertinimas: 5,
    zygioPavadinimas: "Iššūkis Dzūkijos pušynais"
  },
  {
    id: 3,
    autorius: "Agnė ir Marius P.",
    data: "2024-08-05",
    tekstas: "Dalyvavome šeimos žygyje – nuostabi patirtis tiek mums, tiek vaikams. Maršrutas pritaikytas, įdomus, su pertraukėlėmis ir žaidimais. Rolandas moka bendrauti su vaikais ir sudominti juos gamta. Grįšime dar!",
    ivertinimas: 5,
    zygioPavadinimas: "Vasaros nuotykis šeimoms"
  },
  {
    id: 4,
    autorius: "Vytautas J.",
    data: "2024-07-12",
    tekstas: "Labai patiko individualus žygis. Rolandas atsižvelgė į mano pageidavimus dėl tempo ir lankytinų objektų. Sužinojau daug naujo apie gimtojo krašto istoriją ir gamtą. Profesionalu ir įdomu.",
    ivertinimas: 4,
    zygioPavadinimas: "Individualus žygis po Žemaitiją"
  },
  {
    id: 5,
    autorius: "Laura B.",
    data: "2024-06-20",
    tekstas: "Fantastiškas savaitgalio pabėgimas nuo miesto šurmulio! Rolandas ne tik vedlys, bet ir puikus pasakotojas. Žygis buvo kupinas gerų emocijų, gražių vaizdų ir malonaus nuovargio. Lauksiu kitų žygių!",
    ivertinimas: 5,
    zygioPavadinimas: "Pajūrio takais"
  }
];

const AtsiliepimasCard = ({ atsiliepimas, theme }) => {
  // Kortelės spalvos pagal temą
  const cardBgColor = theme === 'light' ? 'bg-white' : 'bg-green-900';
  const cardTextColor = theme === 'light' ? 'text-gray-700' : 'text-slate-200';
  const authorColor = theme === 'light' ? 'text-emerald-700' : 'text-emerald-400';
  const dateColor = theme === 'light' ? 'text-gray-500' : 'text-gray-400';
  const quoteBorderColor = theme === 'light' ? 'border-emerald-500' : 'border-emerald-600';
  const starColor = "text-yellow-400"; // Žvaigždučių spalva

  return (
    <div className={`p-6 rounded-lg shadow-lg ${cardBgColor} ${cardTextColor} transition-colors duration-300 flex flex-col`}>
      <div className="flex items-center mb-3">
        <UserCircle size={28} className={`mr-3 ${authorColor}`} />
        <div>
          <h3 className={`text-lg font-semibold ${authorColor}`}>{atsiliepimas.autorius}</h3>
          {atsiliepimas.zygioPavadinimas && (
            <p className={`text-xs ${dateColor}`}>Žygis: {atsiliepimas.zygioPavadinimas}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className={i < atsiliepimas.ivertinimas ? starColor : (theme === 'light' ? 'text-gray-300' : 'text-gray-600')} fill={i < atsiliepimas.ivertinimas ? starColor : 'transparent'} />
        ))}
      </div>

      <blockquote className={`border-l-4 ${quoteBorderColor} pl-4 italic text-md mb-4`}>
        {atsiliepimas.tekstas}
      </blockquote>

      <div className={`flex items-center text-sm ${dateColor} mt-auto`}> {/* mt-auto stumia datą į apačią */}
        <CalendarDays size={16} className="mr-2" />
        <span>{new Date(atsiliepimas.data).toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
    </div>
  );
};

const AtsiliepimaiPage = () => {
  const { theme } = useTheme();

  // Puslapio spalvos pagal temą
  const pageBgColor = theme === 'light' ? 'bg-slate-100' : 'bg-green-700'; // Pakeista iš bg-slate-50
  const pageTextColor = theme === 'light' ?'text-emerald-950': 'text-slate-100'; // Pagrindinė teksto spalva ant puslapio fono

  return (
    <div className={`flex flex-col items-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full min-h-screen`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Mūsų Klientų Atsiliepimai</h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
        Džiaugiamės galėdami dalintis įspūdžiais ir patirtimis, kurias mūsų žygeiviai patiria keliaudami kartu!
      </p>

      {atsiliepimai.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
          {atsiliepimai.map((atsiliepimas) => (
            <AtsiliepimasCard key={atsiliepimas.id} atsiliepimas={atsiliepimas} theme={theme} />
          ))}
        </div>
      ) : (
        <p className="text-lg">Atsiliepimų kol kas nėra.</p>
      )}
    </div>
  );
};

export default AtsiliepimaiPage;
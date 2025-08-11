// src/pages/AtsiliepimaiPage.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme.js';
import { deliveryClient } from '../contentfulClient.js';
import { Star, UserCircle, CalendarDays } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const AtsiliepimasCard = ({ atsiliepimas, theme }) => {
  const cardBgColor = theme === 'light' ? 'bg-white' : 'bg-green-900';
  const cardTextColor = theme === 'light' ? 'text-gray-700' : 'text-slate-200';
  const authorColor = theme === 'light' ? 'text-emerald-700' : 'text-emerald-400';
  const dateColor = theme === 'light' ? 'text-gray-500' : 'text-gray-400';
  const quoteBorderColor = theme === 'light' ? 'border-emerald-500' : 'border-emerald-600';
  const starColor = "text-yellow-400";

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

      <div className={`flex items-center text-sm ${dateColor} mt-auto`}>
        <CalendarDays size={16} className="mr-2" />
        <span>{new Date(atsiliepimas.data).toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
    </div>
  );
};

const AtsiliepimaiPage = () => {
  const { theme } = useTheme();
  const [atsiliepimai, setAtsiliepimai] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAtsiliepimai = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await deliveryClient.getEntries({
          content_type: 'atsiliepimai', // Pakeiskite šį ID į tikslų ID iš jūsų Contentful platformos
          order: '-fields.data',
        });
        setAtsiliepimai(response.items.map(item => ({
          ...item.fields,
          id: item.sys.id,
        })));
      } catch (err) {
        console.error("Klaida gaunant duomenis iš Contentful:", err);
        setError('Nepavyko gauti atsiliepimų duomenų.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchAtsiliepimai();
  }, []);

  const pageBgColor = theme === 'light' ? 'bg-slate-100' : 'bg-green-700';
  const pageTextColor = theme === 'light' ?'text-emerald-950': 'text-slate-100';

  return (
    <div className={`flex flex-col items-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full min-h-screen`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Mūsų Klientų Atsiliepimai</h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
        Džiaugiamės galėdami dalintis įspūdžiais ir patirtimis, kurias mūsų žygeiviai patiria keliaudami kartu!
      </p>

      {isLoading && <p>Kraunama...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && atsiliepimai.length === 0 && <p className="text-lg">Atsiliepimų kol kas nėra.</p>}
      
      {!isLoading && atsiliepimai.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
          {atsiliepimai.map((atsiliepimas) => (
            <AtsiliepimasCard key={atsiliepimas.id} atsiliepimas={atsiliepimas} theme={theme} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AtsiliepimaiPage;
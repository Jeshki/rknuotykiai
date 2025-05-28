/* src/components/ZygioKalendoriausKortele.jsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ZygioKalendoriausKortele = ({ zygis, onRegisterClick }) => {
  const { theme } = useTheme();

  const cardBg = theme === 'light' ? 'bg-neutral-200' : 'bg-slate-800';
  const cardTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';
  const headingColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-700';
  const buttonBg = theme === 'light' ? 'bg-emerald-950' : 'bg-slate-700';
  const buttonTextColor = theme === 'light' ? 'text-neutral-200' : 'text-slate-100';
  const linkColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-700';

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('lt-LT', options);
  };

  return (
    <div className={`rounded-lg shadow-md p-6 flex flex-col justify-between ${cardBg} ${cardTextColor} transition-colors duration-300`}>
      {zygis.cardPhoto && (
        <div className="mb-4 rounded-md overflow-hidden">
          <img 
            src={zygis.cardPhoto} 
            alt={zygis.pavadinimas} 
            className="w-full h-48 object-cover" 
          />
        </div>
      )}

      <h3 className={`text-2xl font-bold mb-4 ${headingColor}`}>{zygis.pavadinimas}</h3>
      <p className="mb-2"><strong>Data:</strong> {formatDate(zygis.data)}</p>
      <p className="mb-2"><strong>Laikas:</strong> {zygis.laikas}</p>
      <p className="mb-2"><strong>Susitikimo vieta:</strong> {zygis.susitikimoVieta}</p>
      <p className="mb-2">
        <strong>Koordinatės:</strong> <a href={`http://maps.google.com/?q=${zygis.koordinates}`} target="_blank" rel="noopener noreferrer" className={`${linkColor} hover:underline`}>Žemėlapyje</a>
      </p>
      <p className="mb-4"><strong>Kaina:</strong> {zygis.kaina} €</p>
      <p className="text-sm italic mb-4">{zygis.aprasymas}</p>

      {zygis.statusas === 'aktyvus' && (
        <button className={`py-2 px-4 rounded-md text-lg font-semibold ${buttonBg} ${buttonTextColor} hover:opacity-90 transition-opacity`} onClick={() => onRegisterClick(zygis)}>
          Registruotis
        </button>
      )}
      {zygis.statusas === 'pilna' && (
        <p className="font-bold text-orange-500 border border-orange-500 py-1 px-2 rounded-md text-center">Vietų nebėra</p>
      )}
      {zygis.statusas === 'atšauktas' && (
        <p className="font-bold text-red-500 border border-red-500 py-1 px-2 rounded-md text-center">Atšauktas</p>
      )}
    </div>
  );
};

export default ZygioKalendoriausKortele;
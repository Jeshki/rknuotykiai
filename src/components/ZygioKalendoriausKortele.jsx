// src/components/ZygioKalendoriausKortele.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ZygioKalendoriausKortele = ({ zygis, onRegisterClick }) => {
  const { theme } = useTheme();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('lt-LT', options);
  };

  return (
    <div className={`zygio-kortele ${theme}`}>
      {/* <<-- NAUJA: Pagrindinė nuotrauka kortelei */}
      {zygis.cardPhoto && (
        <div className="zygio-kortele-foto-wrapper">
          <img 
            src={zygis.cardPhoto} 
            alt={zygis.pavadinimas} 
            className="zygio-kortele-foto" 
          />
        </div>
      )}

      <h3>{zygis.pavadinimas}</h3>
      <p><strong>Data:</strong> {formatDate(zygis.data)}</p>
      <p><strong>Laikas:</strong> {zygis.laikas}</p>
      <p><strong>Susitikimo vieta:</strong> {zygis.susitikimoVieta}</p>
      <p><strong>Koordinatės:</strong> <a href={`https://www.google.com/maps/search/?api=1&query=${zygis.koordinates}`} target="_blank" rel="noopener noreferrer">Žemėlapyje</a></p> {/* Pataisiau Google Maps nuorodą */}
      <p><strong>Kaina:</strong> {zygis.kaina} €</p>
      <p className="description">{zygis.aprasymas}</p>

      {zygis.statusas === 'aktyvus' && (
        <button className="register-button" onClick={() => onRegisterClick(zygis)}>
          Registruotis
        </button>
      )}
      {zygis.statusas === 'pilna' && (
        <p className="status-full">Vietų nebėra</p>
      )}
      {zygis.statusas === 'atšauktas' && (
        <p className="status-cancelled">Atšauktas</p>
      )}
    </div>
  );
};

export default ZygioKalendoriausKortele;
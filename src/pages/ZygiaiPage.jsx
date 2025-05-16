// src/pages/ZygiaiPage.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import zygiaiData from '../data/zygiaiData'; // Importuojame žygių duomenis
import ZygisCard from '../components/ZygisCard'; // Importuojame ZygisCard komponentą
import '../index.css'; // Jums reikės sukurti šį failą stiliams (arba atskirą ZygiaiPage.css ir jį importuoti)

const ZygiaiPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`zygiai-page ${theme}`}>
      <h1>Buvusių žygių galerijos</h1>
      <p>Atraskite mano nuotykius ir įspūdžius iš praeities žygių!</p>

      <div className="zygiai-gallery-grid">
        {zygiaiData.map((zygis) => (
          <ZygisCard key={zygis.id} zygis={zygis} />
        ))}
      </div>
    </div>
  );
};

export default ZygiaiPage;
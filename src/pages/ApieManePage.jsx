import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../index.css'; // Jei turi specifinių stilių šiam puslapiui
import videoBackground from '../assets/rknuotykiai.mp4'; // Importuojame vaizdo įrašą

const ApieManePage = () => {
  const { theme } = useTheme();

  return (
    <div className={`apie-mane-page ${theme}`}>
      

      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoBackground} type="video/mp4" />
          Tavo naršyklė nepalaiko vaizdo įrašų.
        </video>
        <div className="video-overlay">
          <h3>"RK nuotykiai: Žygiai, kurie pasakoja istorijas. Leiskis į nuotykius regionuose, kur laužai, gardus maistas ir nuoširdus bendravimas kuria nepamirštamą atmosferą."</h3>
        </div>
      </div>

    
    </div>
  );
};

export default ApieManePage;
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Importuojame useTheme hook'ą

const Footer = () => {
  const { theme } = useTheme(); // Naudojame useTheme, kad gautume dabartinę temą
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <p>&copy; {currentYear} Tavo Įmonės Pavadinimas. Visos teisės saugomos.</p>
        <div className="footer-links">
          <a href="/privatumo-politika">Privatumo politika</a>
          <a href="/naudojimosi-salygos">Naudojimosi sąlygos</a>
          <a href="/kontaktai">Susisiekite</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
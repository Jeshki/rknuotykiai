import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerBgColor = theme === 'light' ? 'bg-emerald-950' : 'bg-green-800'; // Pakeista iš bg-green-800 į bg-green-800
  const footerTextColor = theme === 'light' ? 'text-neutral-200' : 'text-slate-100';

  return (
    <footer className={`${footerBgColor} p-4 shadow-md`}>
      <div className={`container mx-auto flex flex-col md:flex-row items-center justify-between ${footerTextColor} text-center md:text-left`}>
        <p className="text-xs sm:text-sm md:text-base mb-2 md:mb-0">© {currentYear} Tavo Įmonės Pavadinimas. Visos teisės saugomos.</p>
        <div className="flex flex-row flex-wrap justify-center md:justify-end space-x-2 sm:space-x-4 mt-2 md:mt-0 text-xs sm:text-sm md:text-base">
          <a href="/privatumo-politika" className="hover:underline">Privatumo politika</a>
          <a href="/naudojimosi-salygos" className="hover:underline">Naudojimosi sąlygos</a>
          <a href="/kontaktai" className="hover:underline">Susisiekite</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
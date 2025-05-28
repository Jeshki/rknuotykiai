/* src/pages/KontaktaiPage.jsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Phone, Mail, CreditCard } from 'lucide-react';

function KontaktaiPage() {
  const { theme } = useTheme();

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-900';
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100'; // Pagrindinis puslapio tekstas dark mode
  const accentColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-100'; // Pakeista iš text-green-800 į text-slate-100
  const contactCardBg = theme === 'light' ? 'bg-neutral-200' : 'bg-green-900';
  const contactCardTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100'; // Kontaktų kortelės tekstas dark mode
  const paymentInfoBorder = theme === 'light' ? 'border-gray-300' : 'border-gray-600';
  const paymentInfoBg = theme === 'light' ? 'bg-gray-100' : 'bg-green-900';

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center justify-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 ${accentColor}`}>Kontaktai</h1>
      <div className={`rounded-lg shadow-xl p-6 sm:p-8 max-w-2xl w-full ${contactCardBg} ${contactCardTextColor}`}>
        <p className="mb-3 flex items-start text-base sm:text-lg">
          <MapPin className={`text-xl sm:text-2xl mr-3 ${accentColor}`} />
          <span className="font-semibold">Miestas:</span> Kaišiadorys, Lietuva
        </p>
        <p className="mb-3 flex items-start text-base sm:text-lg">
          <Phone className={`text-xl sm:text-2xl mr-3 ${accentColor}`} />
          <span className="font-semibold">Telefonas:</span> <a href="tel:+37068214393" className={`${accentColor} font-bold break-all hover:underline`}>(0-682) 14393</a>
        </p>
        <p className="mb-4 flex items-start text-base sm:text-lg">
          <Mail className={`text-xl sm:text-2xl mr-3 ${accentColor}`} />
          <span className="font-semibold">El. paštas:</span> <a href="mailto:rknuotykiai@gmail.com" className={`${accentColor} font-bold break-all hover:underline`}>rknuotykiai@gmail.com</a>
        </p>
        <div className={`border ${paymentInfoBorder} rounded-lg p-5 sm:p-6 ${paymentInfoBg} text-sm sm:text-base`}>
          <p className="mb-2 flex items-start">
            <CreditCard className={`text-2xl sm:text-3xl mr-3 ${accentColor}`} />
            <span className="font-bold">Mokestis pervedamas į sąskaitą:</span> 
            <br className="md:hidden" /> LT887300010176526444 (Swedbank)
          </p>
          <p className="mb-2">
            <span className="font-bold">Gavėjas:</span> Rolandas Kriugžda (individualios veiklos pažyma nr. 1224311)
          </p>
          <p>
            <span className="font-bold">Mokėjimo paskirtis:</span> Nurodykite – Miesta/Data, vardas, pavardė.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KontaktaiPage;
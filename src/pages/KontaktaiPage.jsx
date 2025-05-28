/* src/pages/KontaktaiPage.jsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Phone, Mail, CreditCard } from 'lucide-react'; // Atnaujinti importai

function KontaktaiPage() {
  const { theme } = useTheme();

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-slate-900';
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';
  const accentColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-700';
  const contactCardBg = theme === 'light' ? 'bg-neutral-200' : 'bg-slate-800';
  const contactCardTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';
  const paymentInfoBorder = theme === 'light' ? 'border-gray-300' : 'border-gray-600';
  const paymentInfoBg = theme === 'light' ? 'bg-gray-100' : 'bg-slate-950';

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center justify-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 ${accentColor}`}>Kontaktai</h1> {/* Šriftas antraštės dydis */}
      <div className={`rounded-lg shadow-xl p-6 sm:p-8 max-w-2xl w-full ${contactCardBg} ${contactCardTextColor}`}> {/* Kortelės vidinis tarpas */}
        <p className="mb-3 flex items-start text-base sm:text-lg"> {/* Tarpas po paragrafais, teksto dydis */}
          <MapPin className={`text-xl sm:text-2xl mr-3 ${accentColor}`} /> {/* Ikono dydis */}
          <span className="font-semibold">Miestas:</span> Kaišiadorys, Lietuva
        </p>
        <p className="mb-3 flex items-start text-base sm:text-lg"> {/* Tarpas po paragrafais, teksto dydis */}
          <Phone className={`text-xl sm:text-2xl mr-3 ${accentColor}`} /> {/* Ikono dydis */}
          <span className="font-semibold">Telefonas:</span> <a href="tel:+37068214393" className={`${accentColor} font-bold break-all hover:underline`}>(0-682) 14393</a>
        </p>
        <p className="mb-4 flex items-start text-base sm:text-lg"> {/* Tarpas po paragrafais, teksto dydis */}
          <Mail className={`text-xl sm:text-2xl mr-3 ${accentColor}`} /> {/* Ikono dydis */}
          <span className="font-semibold">El. paštas:</span> <a href="mailto:rknuotykiai@gmail.com" className={`${accentColor} font-bold break-all hover:underline`}>rknuotykiai@gmail.com</a>
        </p>
        <div className={`border ${paymentInfoBorder} rounded-lg p-5 sm:p-6 ${paymentInfoBg} text-sm sm:text-base`}> {/* Mokėjimo info vidinis tarpas ir teksto dydis */}
          <p className="mb-2 flex items-start"> {/* Tarpas po paragrafais */}
            <CreditCard className={`text-2xl sm:text-3xl mr-3 ${accentColor}`} /> {/* Ikono dydis */}
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
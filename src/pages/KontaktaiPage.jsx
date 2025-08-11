// src/pages/KontaktaiPage.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { Phone, Mail, MapPin, Facebook, Send, User, MessageSquare, Smartphone } from 'lucide-react';

const KontaktaiPage = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    vardas: '',
    email: '',
    telefonas: '',
    zinute: '',
  });
  const [formStatus, setFormStatus] = useState(''); // '', 'siunciama', 'sekmingai', 'klaida'

  // Puslapio spalvos pagal temą
  const pageBgColor = theme === 'light' ? 'bg-slate-100' : 'bg-green-700'; // Pakeista iš bg-slate-50
  const pageTextColor = theme === 'light' ? 'bg-emerald-950' : 'text-slate-100'; // Ši klasė lieka tokia, nes pagrindinis tekstas ant šviesaus fono
  const cardBgColor = theme === 'light' ? 'bg-white' : 'bg-green-900'; // Kortelių fonas
  const cardTextColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-100'; // Kortelių tekstas
  const headingColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-100'; // Antraščių spalva kortelėse
  const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-500';
  const inputFocusBorderColor = theme === 'light' ? 'focus:border-emerald-600' : 'focus:border-emerald-400';
  const buttonBgColor = theme === 'light' ? 'bg-emerald-700' : 'bg-emerald-600';
  const buttonTextColor = 'text-white';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.vardas || !formData.email || !formData.telefonas || !formData.zinute) {
      setFormStatus('klaida_laukai'); // Klaida: ne visi laukai užpildyti
      return;
    }
    setFormStatus('siunciama');

    // SIMULIACIJA: Čia būtų kreipinys į backend'ą arba WordPress API
    console.log('Formos duomenys:', formData);
    // Imituojame užklausą į serverį
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Toliau priklausytų nuo realaus WordPress integravimo
    // Pavyzdys sėkmingo išsiuntimo
    setFormStatus('sekmingai');
    setFormData({ vardas: '', email: '', telefonas: '', zinute: '' }); // Išvalome formą

    // Pavyzdys klaidos
    // setFormStatus('klaida_siuntimo');

    // Po kelių sekundžių paslepiame statuso pranešimą
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  const RekvizitaiItem = ({ icon, title, children }) => (
    <div className="flex items-start mb-3">
      <div className={`mr-3 mt-1 ${theme === 'light' ? 'text-emerald-700' : 'text-emerald-400'}`}>{icon}</div>
      <div>
        <h3 className={`font-semibold ${headingColor}`}>{title}</h3>
        <div className={`${cardTextColor} text-sm`}>{children}</div>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col items-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full min-h-screen`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Susisiekite</h1>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
        {/* Kontaktų forma */}
        <div className={`p-6 md:p-8 rounded-lg shadow-xl ${cardBgColor} ${cardTextColor} transition-colors duration-300`}>
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${headingColor}`}>Parašykite mums</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="vardas" className="block text-sm font-semibold mb-1">Vardas <span className="text-red-500">*</span></label>
              <div className="relative">
                <User size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  id="vardas"
                  name="vardas"
                  value={formData.vardas}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 pl-10 rounded-md border ${inputBorderColor} bg-transparent focus:ring-1 ${inputFocusBorderColor} focus:outline-none transition-colors duration-300`}
                  placeholder="Jūsų vardas"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-1">El. paštas <span className="text-red-500">*</span></label>
              <div className="relative">
                <Mail size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 pl-10 rounded-md border ${inputBorderColor} bg-transparent focus:ring-1 ${inputFocusBorderColor} focus:outline-none transition-colors duration-300`}
                  placeholder="Jūsų el. pašto adresas"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="telefonas" className="block text-sm font-semibold mb-1">Telefono numeris <span className="text-red-500">*</span></label>
              <div className="relative">
                <Smartphone size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="tel"
                  id="telefonas"
                  name="telefonas"
                  value={formData.telefonas}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 pl-10 rounded-md border ${inputBorderColor} bg-transparent focus:ring-1 ${inputFocusBorderColor} focus:outline-none transition-colors duration-300`}
                  placeholder="Jūsų telefono numeris"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="zinute" className="block text-sm font-semibold mb-1">Žinutė <span className="text-red-500">*</span></label>
              <div className="relative">
                 <MessageSquare size={18} className={`absolute left-3 top-3 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`} />
                <textarea
                  id="zinute"
                  name="zinute"
                  rows="5"
                  value={formData.zinute}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 pl-10 rounded-md border ${inputBorderColor} bg-transparent focus:ring-1 ${inputFocusBorderColor} focus:outline-none transition-colors duration-300`}
                  placeholder="Jūsų žinutė..."
                ></textarea>
              </div>
            </div>

            {formStatus === 'klaida_laukai' && (
              <p className="mb-4 text-sm text-red-500">Prašome užpildyti visus privalomus laukelius.</p>
            )}
            {formStatus === 'klaida_siuntimo' && (
              <p className="mb-4 text-sm text-red-500">Įvyko klaida siunčiant žinutę. Bandykite vėliau.</p>
            )}
            {formStatus === 'sekmingai' && (
              <p className="mb-4 text-sm text-green-500">Ačiū! Jūsų žinutė sėkmingai išsiųsta.</p>
            )}

            <button
              type="submit"
              disabled={formStatus === 'siunciama'}
              className={`w-full py-3 px-6 rounded-md font-semibold flex items-center justify-center
                          ${buttonBgColor} ${buttonTextColor} hover:opacity-90 transition-opacity
                          disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {formStatus === 'siunciama' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Siunčiama...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" /> Siųsti žinutę
                </>
              )}
            </button>
          </form>
        </div>

        {/* Rekvizitai ir socialiniai tinklai */}
        <div className={`p-6 md:p-8 rounded-lg shadow-xl ${cardBgColor} ${cardTextColor} transition-colors duration-300 flex flex-col`}>
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${headingColor}`}>Rekvizitai</h2>
            <RekvizitaiItem icon={<MapPin size={20} />} title="Adresas">
              Kaišiadorys, Lietuva
            </RekvizitaiItem>
            <RekvizitaiItem icon={<Phone size={20} />} title="Telefonas">
              <a href="tel:+37068214393" className="hover:underline">(0-682) 14393</a>
            </RekvizitaiItem>
            <RekvizitaiItem icon={<Mail size={20} />} title="El. paštas">
              <a href="mailto:rknuotykiai@gmail.com" className="hover:underline">rknuotykiai@gmail.com</a>
            </RekvizitaiItem>

            <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
              <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>Mokėjimo informacija</h3>
              <p className="mb-1 text-sm"><strong>Gavėjas:</strong> Rolandas Kriugžda</p>
              <p className="mb-1 text-sm"><strong>Individualios veiklos pažyma nr.:</strong> 1224311</p>
              <p className="mb-1 text-sm"><strong>Sąskaita:</strong> LT887300010176526444 (Swedbank)</p>
              <p className="text-sm"><strong>Mokėjimo paskirtis:</strong> Nurodykite – Miesta/Data, vardas, pavardė.</p>
            </div>
          </div>

          <div className="mt-auto pt-6"> {/* Stumia socialinius tinklus į apačią, jei kortelė aukštesnė */}
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${headingColor}`}>Sekite mus</h2>
            <a
              href="https://www.facebook.com/rknuotykiai"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center py-2 px-4 rounded-md font-semibold
                          ${theme === 'light' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}
                          text-white transition-colors duration-300`}
            >
              <Facebook size={20} className="mr-2" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktaiPage;

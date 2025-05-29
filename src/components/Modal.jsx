import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Modal = ({ registracijosInfo, onClose, onSendEmail }) => {
  const { theme } = useTheme();
  const [emailToSend, setEmailToSend] = useState('');
  const [emailSentStatus, setEmailSentStatus] = useState('');

  // Modal spalvos
  const modalBg = theme === 'light' ? 'bg-neutral-200' : 'bg-emerald-950'; // Modal fonas
  const modalTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100'; // Modal tekstas
  const headingColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-100'; // Antraštės spalva
  const buttonBg = theme === 'light' ? 'bg-emerald-950' : 'bg-green-900'; // Mygtuko fonas
  const buttonTextColor = theme === 'light' ? 'text-neutral-200' : 'text-slate-100'; // Mygtuko tekstas
  const closeButtonBg = 'bg-gray-500';
  const closeButtonTextColor = 'text-white';
  const inputBorder = theme === 'light' ? 'border-gray-300' : 'border-gray-300'; // Input rėmelis
  const paymentInfoBorder = theme === 'light' ? 'border-gray-300' : 'border-gray-300'; // Mokėjimo info rėmelis
  const paymentInfoBg = theme === 'light' ? 'bg-gray-100' : 'bg-green-900'; // Mokėjimo info fonas


  const handleEmailChange = (e) => {
    setEmailToSend(e.target.value);
  };

  const handleSendEmailClick = async () => {
    if (!emailToSend) {
      setEmailSentStatus('Įveskite el. pašto adresą.');
      return;
    }
    console.log('Bandoma siųsti patvirtinimą į:', emailToSend);
    console.log('Su informacija:', registracijosInfo);

    try {
      await onSendEmail(emailToSend, registracijosInfo);
      setEmailSentStatus('Patvirtinimas išsiųstas sėkmingai!');
    } catch (error) { // <-- Panaudojamas error kintamasis
      console.error('Nepavyko išsiųsti patvirtinimo el. paštu:', error); // Pridėta klaidos registravimo eilutė
      setEmailSentStatus('Nepavyko išsiųsti patvirtinimo. Bandykite dar kartą.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('lt-LT', options);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className={`rounded-lg shadow-xl p-8 max-w-lg w-full ${modalBg} ${modalTextColor} transition-colors duration-300`}>
        <h2 className={`text-3xl font-bold mb-4 ${headingColor}`}>Registracija sėkminga!</h2>
        <p className="mb-4">Ačiū, kad užsiregistravote į žygį: <strong>{registracijosInfo.zygioPavadinimas}</strong></p>

        <div className={`border ${paymentInfoBorder} p-4 rounded-md mb-6 ${paymentInfoBg}`}>
          <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>Mokėjimo informacija:</h3>
          <p className="mb-2">
            Mokestį perveskite į sąskaitą: <p className="font-bold"><strong>LT887300010176526444</strong> (Swedbank)</p>
          </p>
          <p className="mb-2">
            <strong>Gavėjas:</strong> Rolandas Kriugžda
          </p>
          <p>
            <strong>Mokėjimo paskirtyje nurodykite:</strong> {registracijosInfo.miestas}/{formatDate(registracijosInfo.zygioData)} {registracijosInfo.vardas}
          </p>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 pt-6 mt-6">
          <p className="mb-4">Norite gauti registracijos patvirtinimą el. paštu?</p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Įveskite savo el. pašto adresą"
              value={emailToSend}
              onChange={handleEmailChange}
              className={`flex-grow p-3 rounded-md mr-2 border ${inputBorder} bg-transparent ${modalTextColor}`}
            />
            <button className={`py-3 px-6 rounded-md font-semibold ${buttonBg} ${buttonTextColor} hover:opacity-90 transition-opacity`} onClick={handleSendEmailClick}>Siųsti</button>
          </div>
          {emailSentStatus && <p className="mt-2 text-red-500 font-bold">{emailSentStatus}</p>}
        </div>

        <button className={`py-3 px-6 rounded-md font-semibold mt-6 ${closeButtonBg} ${closeButtonTextColor} hover:opacity-90 transition-opacity`} onClick={onClose}>Uždaryti</button>
      </div>
    </div>
  );
};

export default Modal;
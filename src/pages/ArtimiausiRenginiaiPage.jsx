/* src/pages/ArtimiausiRenginiaiPage.jsx */
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import busimiZygiai from '../data/busimiZygiaiData.js';
import ZygioKalendoriausKortele from '../components/ZygioKalendoriausKortele.jsx';
import RegistracijosForma from '../components/RegistracijosForma.jsx';
import Modal from '../components/Modal.jsx';


const ArtimiausiRenginiaiPage = () => {
  const { theme } = useTheme();
  const [selectedZygis, setSelectedZygis] = useState(null);
  const [registrationData, setRegistrationData] = useState(null);

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-700'; 
  const pageTextColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-100';

  const handleRegisterClick = (zygis) => {
    setSelectedZygis(zygis);
  };

  const handleCancelRegistration = () => {
    setSelectedZygis(null);
  };

  const handleSubmitRegistration = (zygis, formData) => {
    const fullRegistrationInfo = {
      zygisId: zygis.id,
      zygioPavadinimas: zygis.pavadinimas,
      zygioData: zygis.data,
      ...formData,
    };
    setRegistrationData(fullRegistrationInfo);
    setSelectedZygis(null);
  };

  const handleCloseConfirmationModal = () => {
    setRegistrationData(null);
  };

  const handleSendConfirmationEmail = async (email, info) => {
    console.log(`Siunčiama registracijos informacija į ${email}:`, info);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center p-4 md:p-8 text-center ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Būsimų žygių kalendorius</h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">Išsirinkite ir registruokitės į artimiausius nuotykius!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pb-8 w-full">
        {busimiZygiai.map((zygis) => (
          <ZygioKalendoriausKortele
            key={zygis.id}
            zygis={zygis}
            onRegisterClick={handleRegisterClick}
          />
        ))}
      </div>

      {selectedZygis && (
        <RegistracijosForma
          zygis={selectedZygis}
          onSubmitSuccess={handleSubmitRegistration}
          onCancel={handleCancelRegistration}
        />
      )}

      {registrationData && (
        <Modal
          registracijosInfo={registrationData}
          onClose={handleCloseConfirmationModal}
          onSendEmail={handleSendConfirmationEmail}
        />
      )}
    </div>
  );
};

export default ArtimiausiRenginiaiPage;

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import busimiZygiai from '../data/busimiZygiaiData';
import ZygioKalendoriausKortele from '../components/ZygioKalendoriausKortele';
import RegistracijosForma from '../components/RegistracijosForma';
import Modal from '../components/Modal';


const ArtimiausiRenginiaiPage = () => {
  const { theme } = useTheme();
  const [selectedZygis, setSelectedZygis] = useState(null);
  const [registrationData, setRegistrationData] = useState(null);

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
    <div className={`artimiausi-renginiai-page ${theme}`}>
      <h1>Būsimų žygių kalendorius</h1>
      <p>Išsirinkite ir registruokitės į artimiausius nuotykius!</p>

      <div className="zygiai-kalendorius-grid">
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
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Modal = ({ registracijosInfo, onClose, onSendEmail }) => {
  const { theme } = useTheme();
  const [emailToSend, setEmailToSend] = useState('');
  const [emailSentStatus, setEmailSentStatus] = useState('');

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
    } catch (error) {
      setEmailSentStatus('Nepavyko išsiųsti patvirtinimo. Bandykite dar kartą.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('lt-LT', options);
  };

  return (
    <div className="registration-overlay">
      <div className={`registration-confirmation-modal ${theme}`}>
        <h2>Registracija sėkminga!</h2>
        <p>Ačiū, kad užsiregistravote į žygį: <strong>{registracijosInfo.zygioPavadinimas}</strong></p>

      

        <div className="payment-confirmation-info">
          <h3>Mokėjimo informacija:</h3>
          <p>
            Mokestį perveskite į sąskaitą: <p><strong>LT887300010176526444</strong> (Swedbank)</p>
          </p>
          <p>
            <strong>Gavėjas:</strong> Rolandas Kriugžda
          </p>
          <p>
            <strong>Mokėjimo paskirtyje nurodykite:</strong> {registracijosInfo.miestas}/{formatDate(registracijosInfo.zygioData)} {registracijosInfo.vardas}
          </p>
        </div>

        <div className="email-send-section">
          <p>Norite gauti registracijos patvirtinimą el. paštu?</p>
          <input
            type="email"
            placeholder="Įveskite savo el. pašto adresą"
            value={emailToSend}
            onChange={handleEmailChange}
            className="email-input"
          />
          <button className="send-email-button" onClick={handleSendEmailClick}>Siųsti</button>
          {emailSentStatus && <p className="email-status-message">{emailSentStatus}</p>}
        </div>

        <button className="close-modal-button" onClick={onClose}>Uždaryti</button>
      </div>
    </div>
  );
};

export default Modal;
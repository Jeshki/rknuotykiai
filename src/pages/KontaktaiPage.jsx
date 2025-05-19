import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaMoneyBillAlt } from 'react-icons/fa'; 

function KontaktaiPage() {
  const { theme } = useTheme();

  return (
    <div className={`container mx-auto p-4 md:p-8 kontaktai-page ${theme}`}>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Kontaktai</h1>
      <div className="contact-details">
        <p>
          <FaMapMarkerAlt className="contact-icon" /> 
          <strong>Miestas:</strong> Kaišiadorys, Lietuva
        </p>
        <p>
          <FaPhone className="contact-icon" /> 
          <strong>Telefonas:</strong> <a href="tel:+37068214393" className="text-link-color">(0-682) 14393</a>
        </p>
        <p>
          <FaEnvelope className="contact-icon" /> 
          <strong>El. paštas:</strong> <a href="mailto:rknuotykiai@gmail.com" className="text-link-color">rknuotykiai@gmail.com</a>
        </p>
        <div className="payment-info">
          <p className="payment-info-line">
            <FaMoneyBillAlt className="contact-icon payment-icon" /> 
            <strong>Mokestis pervedamas į sąskaitą:</strong> 
            LT887300010176526444 (Swedbank)
          </p>
          <p className="payment-info-line">
            <strong>Gavėjas:</strong>
            Rolandas Kriugžda (individualios veiklos pažyma nr. 1224311)
          </p>
          <p className="payment-info-line">
            <strong>Mokėjimo paskirtis:</strong>Nurodykite – Miesta/Data, vardas, pavardė.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KontaktaiPage;
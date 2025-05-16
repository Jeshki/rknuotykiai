import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const RegistracijosForma = ({ zygis, onSubmitSuccess, onCancel }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    vardas: '',
    miestas: '',
    telefonas: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.vardas || !formData.miestas || !formData.telefonas || !formData.email) {
      alert('Prašome užpildyti visus laukelius!');
      return;
    }
    onSubmitSuccess(zygis, formData);
  };

  return (
    <div className="registration-overlay">
      <div className={`registration-form ${theme}`}>
        <h2>Registracija į žygį: {zygis.pavadinimas}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="vardas">Vardas ir Pavardė:</label>
            <input
              type="text"
              id="vardas"
              name="vardas"
              value={formData.vardas}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="miestas">Miestas:</label>
            <input
              type="text"
              id="miestas"
              name="miestas"
              value={formData.miestas}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefonas">Telefono numeris:</label>
            <input
              type="tel"
              id="telefonas"
              name="telefonas"
              value={formData.telefonas}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">El. pašto adresas:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-button">Registruotis</button>
            <button type="button" className="cancel-button" onClick={onCancel}>Atšaukti</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistracijosForma;
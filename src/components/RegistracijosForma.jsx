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

  const formBg = theme === 'light' ? 'bg-neutral-200' : 'bg-green-900';
  const formTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';
  const inputBorder = theme === 'light' ? 'border-gray-300' : 'border-gray-600';
  const inputFocusBorder = theme === 'light' ? 'border-emerald-950' : 'border-slate-100'; // Pakeista iš border-green-800 į border-slate-100
  const submitButtonBg = theme === 'light' ? 'bg-emerald-950' : 'bg-green-800';
  const submitButtonTextColor = theme === 'light' ? 'text-neutral-200' : 'text-slate-100';
  const cancelButtonBg = 'bg-gray-300';
  const cancelButtonTextColor = 'text-gray-800';


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
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className={`rounded-lg shadow-xl p-8 max-w-lg w-full ${formBg} ${formTextColor} transition-colors duration-300`}>
        <h2 className="text-3xl font-bold mb-6 text-center">Registracija į žygį: <br/> {zygis.pavadinimas}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="vardas" className="block text-sm font-semibold mb-2">Vardas ir Pavardė:</label>
            <input
              type="text"
              id="vardas"
              name="vardas"
              value={formData.vardas}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-md border ${inputBorder} focus:border-2 focus:${inputFocusBorder} focus:ring-1 focus:ring-${inputFocusBorder} bg-transparent ${formTextColor}`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="miestas" className="block text-sm font-semibold mb-2">Miestas:</label>
            <input
              type="text"
              id="miestas"
              name="miestas"
              value={formData.miestas}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-md border ${inputBorder} focus:border-2 focus:${inputFocusBorder} focus:ring-1 focus:ring-${inputFocusBorder} bg-transparent ${formTextColor}`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefonas" className="block text-sm font-semibold mb-2">Telefono numeris:</label>
            <input
              type="tel"
              id="telefonas"
              name="telefonas"
              value={formData.telefonas}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-md border ${inputBorder} focus:border-2 focus:${inputFocusBorder} focus:ring-1 focus:ring-${inputFocusBorder} bg-transparent ${formTextColor}`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">El. pašto adresas:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-md border ${inputBorder} focus:border-2 focus:${inputFocusBorder} focus:ring-1 focus:ring-${inputFocusBorder} bg-transparent ${formTextColor}`}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="submit" className={`py-2 px-6 rounded-md font-semibold ${submitButtonBg} ${submitButtonTextColor} hover:opacity-90 transition-opacity`}>Registruotis</button>
            <button type="button" className={`py-2 px-6 rounded-md font-semibold ${cancelButtonBg} ${cancelButtonTextColor} hover:opacity-90 transition-opacity`} onClick={onCancel}>Atšaukti</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistracijosForma;
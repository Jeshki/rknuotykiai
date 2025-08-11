/* src/pages/ZygiaiPage.jsx */
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme.js';
import { deliveryClient } from '../contentfulClient.js';
import ZygisCard from '../components/ZygisCard.jsx';

const ZygiaiPage = () => {
  const { theme } = useTheme();
  const [zygiai, setZygiai] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-700';
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';

  useEffect(() => {
    const fetchZygiai = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await deliveryClient.getEntries({
          content_type: 'hike', // Naudojamas jūsų nurodytas ID
          order: '-fields.hikeDate'
        });
        setZygiai(response.items.map(item => ({
          ...item.fields,
          id: item.sys.id,
        })));
      } catch (err) {
            console.error("Klaida gaunant duomenis iš Contentful:", err);
            setError('Nepavyko gauti žygių duomenų.');
        } finally {
            setIsLoading(false);
        }
    };
    fetchZygiai();
}, []);

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center p-4 md:p-8 text-center ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Buvusių žygių galerijos</h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">Atraskite mano nuotykius ir įspūdžius iš praeities žygių!</p>

      {isLoading && <p>Kraunama...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && zygiai.length === 0 && <p>Kol kas nuotraukų galerijoje nėra.</p>}

      {!isLoading && zygiai.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pb-8 w-full">
          {zygiai.map((zygis) => (
            <ZygisCard key={zygis.id} zygis={zygis} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ZygiaiPage;
// src/pages/PaslaugosPage.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme.js';
import { deliveryClient } from '../contentfulClient.js';
import { Footprints, Users, Globe, BookOpen, HeartHandshake, MapPin } from 'lucide-react';

function PaslaugosPage() {
  const { theme } = useTheme();
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-700';
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';
  const headingColor = theme === 'light' ? 'text-emerald-950' : 'text-slate-100';
  const cardBgColor = theme === 'light' ? 'bg-white' : 'bg-green-900';
  const cardTextColor = theme === 'light' ? 'text-gray-700' : 'text-slate-200';
  const iconColor = theme === 'light' ? 'text-emerald-700' : 'text-slate-200';

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await deliveryClient.getEntries({
          content_type: 'service', // Naudojamas jūsų nurodytas turinio tipo ID
          order: 'sys.createdAt',
        });
        setServices(response.items.map(item => ({
          ...item.fields,
          id: item.sys.id,
        })));
      } catch (err) {
        console.error("Klaida gaunant duomenis iš Contentful:", err);
        setError('Nepavyko gauti paslaugų duomenų.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  const getIcon = (title) => {
    switch (title) {
      case "Individualūs žygiai":
        return <Footprints size={40} />;
      case "Grupės žygiai ir renginiai":
        return <Users size={40} />;
      case "Užsienio žygiai ir ekspedicijos":
        return <Globe size={40} />;
      case "Edukacinės programos gamtoje":
        return <BookOpen size={40} />;
      case "Konsultacijos ir maršrutų kūrimas":
        return <HeartHandshake size={40} />;
      case "Orientavimosi kursai":
        return <MapPin size={40} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center p-4 md:p-8 ${pageBgColor} ${pageTextColor} w-full`}>
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${headingColor}`}>Mūsų siūlomos paslaugos</h1>
      <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
        Atraskite platų žygių ir gamtos pažinimo paslaugų asortimentą. Nesvarbu, ar esate patyręs žygeivis, ar tik pradedate savo kelionę gamtoje, mes turime jums tinkamą nuotykių pasiūlymą.
      </p>

      {isLoading && <p>Kraunama...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && services.length === 0 && <p className="text-lg">Paslaugų kol kas nėra.</p>}

      {!isLoading && services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-8 w-full">
          {services.map((service) => (
            <div key={service.id} className={`rounded-lg shadow-xl p-6 flex flex-col items-center text-center ${cardBgColor} ${cardTextColor} transition-colors duration-300`}>
              <div className={`mb-4 ${iconColor}`}>
                {getIcon(service.title)}
              </div>
              <h2 className={`text-2xl font-bold mb-3 ${headingColor}`}>{service.title}</h2>
              <p className="text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaslaugosPage;
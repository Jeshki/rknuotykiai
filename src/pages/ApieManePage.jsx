// src/pages/ApieManePage.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme.js';
import { deliveryClient } from '../contentfulClient.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import videoBackground from '../assets/rknuotykiai.mp4';

const ApieManePage = () => {
  const { theme } = useTheme();
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchPageData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await deliveryClient.getEntries({
          content_type: 'aboutPage', // Naudojamas jūsų nurodytas ID
        });
        if (response.items.length > 0) {
          setPageData(response.items[0].fields);
        } else {
          setError('Nepavyko rasti duomenų šiam puslapiui.');
        }
      } catch (err) {
        console.error("Klaida gaunant duomenis iš Contentful:", err);
        setError('Nepavyko gauti duomenų iš Contentful.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPageData();
  }, []);

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-700';
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';

  const rolandasImages = pageData?.rolandoNuotraukos || []; // Pavyzdys, kaip galėtų būti pavadintas laukas
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  const carouselArrowsDotsColor = theme === 'light' ? '#064e3b' : '#334155';
  const activeDotColor = theme === 'light' ? '#0d1218' : '#f1f5f9';

  const sliderStyle = {
    '--carousel-arrows-dots-color': carouselArrowsDotsColor,
    '--active-dot-color': activeDotColor,
  };

  if (isLoading) {
    return <p>Kraunama...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center ${pageBgColor} ${pageTextColor} w-full`}>
      <div className="relative w-full h-[70vh] overflow-hidden flex justify-center items-center mb-5">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover top-0 left-0 z-10">
          <source src={videoBackground} type="video/mp4" />
          Tavo naršyklė nepalaiko vaizdo įrašų.
        </video>
        <div className="relative z-20 text-white text-center bg-black bg-opacity-40 p-5 rounded-lg">
          <h3 className="text-3xl font-bold">"{pageData?.puslapioAntraste || "RK Nuotykiai"}" - Kur prasideda nuotykiai!</h3>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8 text-center" style={sliderStyle}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageData?.pagrindineAntraste || "Apie mane"}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          {pageData?.tekstas1 || "Sveiki, esu Rolandas – aistringas keliautojas, nuotykių ieškotojas..."}
        </p>

        {rolandasImages.length > 0 && (
          <div className="relative mb-8 max-w-4xl mx-auto w-full">
            <Slider {...sliderSettings}>
              {rolandasImages.map((asset, index) => (
                <div key={index} className="carousel-image-wrapper flex justify-center items-center p-4" style={{ height: '500px' }}>
                  <img
                    src={asset.fields.file.url}
                    alt={`Rolando nuotykių nuotrauka ${index + 1}`}
                    className="w-full object-contain rounded-md max-h-full"
                  />
                </div>
              ))}
            </Slider>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
              {currentSlide + 1} / {rolandasImages.length}
            </div>
          </div>
        )}

        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {pageData?.tekstas2 || "Mano tikslas – ne tik parodyti jums nuostabiausius..."}
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
          {pageData?.tekstas3 || "Leiskimės į nuotykius, kurie praturtins jūsų sielą..."}
        </p>
      </div>
    </div>
  );
};

export default ApieManePage;
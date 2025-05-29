import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ZygisCard = ({ zygis }) => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Kortelės spalvos
  const cardBg = theme === 'light' ? 'bg-emerald-950' : 'bg-green-900'; // Fonas
  const cardTextColor = 'text-slate-100'; // Tekstas
  const headingColor = 'text-slate-100'; // Pavadinimo tekstas
  const carouselArrowsDotsColor = theme === 'light' ? '#f1f5f9' : '#f1f5f9'; // Rodyklių spalva (slate-100 light, slate-100 dark)
  const activeDotColor = 'text-slate-100'; // Aktyvaus taško spalva (visada slate-100)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    afterChange: (current) => setCurrentSlide(current)
  };

  return (
    <div className={`rounded-lg shadow-md p-6 ${cardBg} ${cardTextColor} transition-colors duration-300`}>
      <h3 className={`text-2xl font-bold mb-4 ${headingColor}`}>{zygis.pavadinimas}</h3>
      <p className="mb-2"><strong>Vieta:</strong> {zygis.vieta}</p>
      
      {zygis.nuotraukos && zygis.nuotraukos.length > 0 ? (
        <div className="relative mb-4">
          <Slider {...settings}>
            {zygis.nuotraukos.map((foto, index) => (
              <div key={index} className="carousel-image-wrapper">
                <img src={foto} alt={`${zygis.pavadinimas} nuotrauka ${index + 1}`} className="w-full h-64 object-cover rounded-md" />
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {currentSlide + 1} / {zygis.nuotraukos.length}
          </div>
        </div>
      ) : (
        <p className="mb-4">Nuotraukų nėra.</p>
      )}

      <p className="text-sm italic mb-4">{zygis.aprasymas}</p>

      <div className="text-sm">
        {zygis.aplankytosVietos && zygis.aplankytosVietos.length > 0 && (
          <p className="mb-1"><strong>Aplankytos vietos:</strong> {zygis.aplankytosVietos.join(', ')}</p>
        )}
        <p className="mb-1"><strong>Nueiti km:</strong> {zygis.nueitiKm} km</p>
        {zygis.aplankytiObjektai && zygis.aplankytiObjektai.length > 0 && (
          <p><strong>Aplankyti objektai:</strong> {zygis.aplankytiObjektai.join(', ')}</p>
        )}
      </div>
      <style jsx>{`
        .slick-prev:before, .slick-next:before {
          color: ${carouselArrowsDotsColor} !important;
        }
        .slick-dots li button:before {
          color: ${carouselArrowsDotsColor} !important;
        }
        .slick-dots li.slick-active button:before {
          color: ${activeDotColor} !important;
        }
      `}</style>
    </div>
  );
};

export default ZygisCard;
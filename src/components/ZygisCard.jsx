// src/components/ZygisCard.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Importuojame temai
import Slider from 'react-slick'; // Naudosime react-slick karuselei
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ZygisCard = ({ zygis }) => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0); // Stebime dabartinį skaidrės numerį

  // Karuselės nustatymai
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Rodyti rodykles
    afterChange: (current) => setCurrentSlide(current) // Atnaujinti dabartinės skaidrės indeksą
  };

  return (
    <div className={`zygis-card ${theme}`}>
      <h3>{zygis.pavadinimas}</h3>
      <p><strong>Vieta:</strong> {zygis.vieta}</p>
      
      {zygis.nuotraukos && zygis.nuotraukos.length > 0 ? (
        <div className="zygis-carousel-container">
          <Slider {...settings}>
            {zygis.nuotraukos.map((foto, index) => (
              <div key={index} className="carousel-image-wrapper">
                <img src={foto} alt={`${zygis.pavadinimas} nuotrauka ${index + 1}`} className="zygis-foto" />
              </div>
            ))}
          </Slider>
          {/* Parodyti dabartinį nuotraukos numerį */}
          <div className="image-counter">
            {currentSlide + 1} / {zygis.nuotraukos.length}
          </div>
        </div>
      ) : (
        <p>Nuotraukų nėra.</p>
      )}

      <p>{zygis.aprasymas}</p>

      <div className="zygis-details">
        {zygis.aplankytosVietos && zygis.aplankytosVietos.length > 0 && (
          <p><strong>Aplankytos vietos:</strong> {zygis.aplankytosVietos.join(', ')}</p>
        )}
        <p><strong>Nueiti km:</strong> {zygis.nueitiKm} km</p>
        {zygis.aplankytiObjektai && zygis.aplankytiObjektai.length > 0 && (
          <p><strong>Aplankyti objektai:</strong> {zygis.aplankytiObjektai.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default ZygisCard;
// src/pages/ApieManePage.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/useTheme.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import videoBackground from '../assets/rknuotykiai.mp4';
// Importuojame Rolando nuotraukas
import rolandas1 from '../assets/img/rolandas1.jpg';
import rolandas2 from '../assets/img/rolandas2.jpg';
import rolandas3 from '../assets/img/rolandas3.jpg';
import rolandas4 from '../assets/img/rolandas4.jpg';
import rolandas5 from '../assets/img/rolandas5.jpg';
import rolandas6 from '../assets/img/rolandas6.jpg';
import rolandas7 from '../assets/img/rolandas7.jpg';

const ApieManePage = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const pageBgColor = theme === 'light' ? 'bg-neutral-200' : 'bg-green-700';
  const pageTextColor = theme === 'light' ? 'text-gray-800' : 'text-slate-100';

  const rolandasImages = [
    rolandas1,
    rolandas2,
    rolandas3,
    rolandas4,
    rolandas5,
    rolandas6,
    rolandas7,
  ];

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


  return (
    <div className={`min-h-[calc(100vh-80px-100px)] flex flex-col items-center ${pageBgColor} ${pageTextColor} w-full`}>
      <div className="relative w-full h-[70vh] overflow-hidden flex justify-center items-center mb-5">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover top-0 left-0 z-10">
          <source src={videoBackground} type="video/mp4" />
          Tavo naršyklė nepalaiko vaizdo įrašų.
        </video>
        <div className="relative z-20 text-white text-center bg-black bg-opacity-40 p-5 rounded-lg">
          <h3 className="text-3xl font-bold">"RK Nuotykiai" - Kur prasideda nuotykiai!</h3>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8 text-center" style={sliderStyle}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Apie mane</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          Sveiki, esu Rolandas – aistringas keliautojas, nuotykių ieškotojas ir giliai mylintis gamtą žmogus. Kiekviena mano kelionė, kiekvienas žygis, yra ne tik nueiti kilometrai, bet ir gilesnis ryšys su aplinka bei savęs pažinimas. Esu įsitikinęs, kad žygiavimas yra kur kas daugiau nei tiesiog ėjimas pėsčiomis; tai – meditacija judesyje, galimybė atitrūkti nuo kasdienės rutinos ir įkvėpti naujos gyvybės.
        </p>

        {/* Slideshow dalis */}
        {rolandasImages.length > 0 && (
          <div className="relative mb-8 max-w-4xl mx-auto w-full">
            <Slider {...sliderSettings}>
              {rolandasImages.map((foto, index) => (
                <div key={index} className="carousel-image-wrapper flex justify-center items-center p-4" style={{ height: '500px' }}>
                  <img
                    src={foto}
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
          Mano tikslas – ne tik parodyti jums nuostabiausius, kartais net ir paslėptus, Lietuvos kampelius, bet ir įkvėpti jus išbandyti save, atrasti vidinę stiprybę ir pasisemti neįtikėtinos energijos iš gamtos. Kviečiu jus prisijungti prie mano organizuojamų žygių, kur kiekvienas maršrutas yra kruopščiai apgalvotas, kad pasiūlytų ne tik gražius vaizdus, bet ir unikalias patirtis. Kartu mes ne tik eisime, bet ir klausysimės miško ošimo, stebėsime tekančius vandenis, ragausime laukinės gamtos dovanas ir dalinsimės istorijomis prie laužo.
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
          Leiskimės į nuotykius, kurie praturtins jūsų sielą, sustiprins kūną ir paliks neišdildomus prisiminimus. Prisijunkite prie RK nuotykių ir kartu atraskime Lietuvos grožį žingsnis po žingsnio!
        </p>
      </div>
    </div>
  );
};

export default ApieManePage;

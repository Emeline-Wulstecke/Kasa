import './carrousel.scss';
import React, { useState } from 'react';
import arrowleft from '../../assets/images/arrowleft.png';
import arrowright from '../../assets/images/arrowright.png';

const Carrousel = ({ data }) => {
    if (!data || !data.pictures || data.pictures.length === 0) {
        return null; // Gestion des données manquantes ou incorrectes
      }
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImg = () => {
    setCurrentIndex((index) => (index === 0 ? data.pictures.length - 1 : index - 1));
  };

  const nextImg = () => {
    setCurrentIndex((index) => (index === data.pictures.length - 1 ? 0 : index + 1));
  };

  const currentImg = data.pictures[currentIndex];
  const counterImg = data.pictures.length;

  if (counterImg === 1) {
    return <img src={currentImg} alt={data.title} className="carousel-img" />;
  }

  const displayCounter = `${currentIndex + 1}/${counterImg}`;

  return (
    <div>
      <img src={currentImg} alt={data.title} className="carousel-img" />
      <img src={arrowleft} alt="Flèche de gauche" className="arrow-left" onClick={previousImg} />
      <img src={arrowright} alt="Flèche de droite" className="arrow-right" onClick={nextImg} />
      <div className="carousel-counter">{displayCounter}</div>
    </div>
  );
};

export default Carrousel;


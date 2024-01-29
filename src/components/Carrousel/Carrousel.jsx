import './carrousel.scss';
import React, { useState } from 'react';
import arrowleft from '../../assets/images/arrowleft.png';
import arrowright from '../../assets/images/arrowright.png';

const Carrousel = ({ data }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImg = () => {
    setCurrentIndex((index) => (index === 0 ? data.pictures.length - 1 : index - 1));
  };

  const nextImg = () => {
    setCurrentIndex((index) => (index === data.pictures.length - 1 ? 0 : index + 1));
  };

  const currentImgUrl = data.pictures[currentIndex];
  const imgCounter = data.pictures.length;

  if (imgCounter === 1) {
    return <img src={currentImgUrl} alt={data.title} />;
  }

  const displayCounter = `${currentIndex + 1}/${imgCounter}`;

  return (
    <figure className="carrousel">
      <img src={arrowleft} alt="Flèche de gauche" className="arrow-left" onClick={previousImg} />
      <img src={currentImgUrl} alt={data.title} className="carrousel-img" />
      <img src={arrowright} alt="Flèche de droite" className="arrow-right" onClick={nextImg} />
      <figcaption className="carrousel-counter">{displayCounter}</figcaption>
    </figure>
  );
};

export default Carrousel;


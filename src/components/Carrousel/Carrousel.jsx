import './carrousel.scss';
import React, { useState } from 'react';
import arrowleft from '../../assets/images/arrowleft.png';
import arrowright from '../../assets/images/arrowright.png';

const Carrousel = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const previousImg = () => {
        setCurrentImg((index) => (index === 0 ? data.pictures.length - 1 : index - 1))
    };
    const nextImg = () => {
        setCurrentImg((index) => (index === data.pictures.length - 1 ? 0 : index + 1))
    };
}
    
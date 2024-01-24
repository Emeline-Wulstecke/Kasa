import React from 'react'
import './Footer.scss';
import logofooter from "../../assets/images/logofooter.png";

const Footer = () => {
  const anneeEnCours = new Date().getFullYear();
  const text = `© ${anneeEnCours} Kasa. All rights reserved.`

  return (
    <footer>
      <img src={logofooter} alt="Logo de Kasa écrit noir et blanc" className="logo" />
      <p>{text}</p>
    </footer>
  )
}

export default Footer;


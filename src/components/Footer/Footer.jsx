import React from 'react'
import './Footer.scss';
import logofooter from "../../assets/images/logoFooter.png";

const Footer = () => {
    return (
        <footer>
           <img src={logofooter} alt="Logo de Kasa écrit noir et blanc" className="logo" /> 
        </footer>
    )
}

export default Footer;
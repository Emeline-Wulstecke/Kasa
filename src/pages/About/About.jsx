import React from 'react'
import './about.scss';
import Banner from '../../components/Banner/Banner';
import imgbanner from '../../assets/images/banner2.png';

const About = () => {
    return (
        <main>
            < Banner 
            img={imgbanner}
            alt="Une image vue sur les sapins et les montagnes"/>
            
        </main>
    )
}

export default About;
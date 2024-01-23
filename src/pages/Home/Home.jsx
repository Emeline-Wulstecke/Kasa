import React from 'react'
import Banner from '../../components/Banner/Banner'
import imgHome from "../../assets/images/banner.png";
import Cards from '../../components/Cards/Cards';

const Home = () => {
    return (
        <main>
            <Banner 
            img={imgHome}
            alt="Une image d'une falaise avec une vue sur une plage"
            text="Chez vous, partout et ailleurs"/>
            <Cards />
        </main>
    )
}

export default Home;


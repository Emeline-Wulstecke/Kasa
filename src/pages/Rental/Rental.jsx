import React from 'react'
import './rental.scss'
import Carrousel from '../../components/Carrousel/Carrousel';
import data from '../../data/data.json'

const Rental = () => {
  return (
    <main>
      <Carrousel data={data} />
       
    </main>
  )
}

export default Rental; 
import React from 'react'
import './rental.scss'
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import data from '../../data/data.json'

const Rental = () => {
  const { id } = useParams();
  const rental = data.find((rental) => rental.id === id);

  return (
    <main className='main-rental'>
      <Carrousel data={rental} />
       
    </main>
  )
}

export default Rental; 
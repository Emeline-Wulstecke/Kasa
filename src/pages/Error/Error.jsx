import React from 'react'
import { NavLink } from 'react-router-dom';
import './error.scss'

const Error = () => {
  return (
    <main className='main-error'>
      <h1>404</h1>
      <p className='text-error'>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="link-error">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </main>
  )
}

export default Error;
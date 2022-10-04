import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.css';

const Error = () => {
  return (
    <main data-testid='error-test' className="bsod container">
      <h1 className="neg title"><span className="bg">Error - 404</span></h1>
      <p className='paragraph'>Ha ocurrido un error, para continuar:</p>
      <p className='paragraph'>* Volver a nuestra página de inicio.<br />
      * Envíenos un correo electrónico sobre este error e inténtelo más tarde.</p>
      <NavLink className='nav-link text-center' to='/'>
        <button type="button" className="btn btn-dark btn-back">Inicio</button>
      </NavLink>
    </main>
  );
};

export default Error;

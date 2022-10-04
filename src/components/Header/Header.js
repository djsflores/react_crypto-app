import React from 'react';
import { NavLink } from 'react-router-dom';
import imagenFiona from '../../assets/images/remove.bg-designify-edit.png';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className='navbar-brand nav-link' to='/'><img src={imagenFiona} className='imgRedonda' />CoinFiona</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className='nav-link' to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/nonexistent'>Futuro</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/about'>Nosotros</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

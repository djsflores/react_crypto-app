import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <p className='col-md-4 mb-0 text-muted'>CoinFiona</p>
          {/* <NavLink className='navbar-brand fs-4' to='/'>
            <i className='bi bi-currency-bitcoin me-1'></i>CoinFiona
          </NavLink> */}
          {/* <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button> */}
          {/* <div
            className='collapse navbar-collapse d-flex justify-content-between'
            id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
            </ul>
          </div> */}
        </div>
      </nav>
  );
};

export default Header;

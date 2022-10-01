import React from 'react';
import { CoinPagination } from '../../components/CoinPagination';

const Home = () => {
  return (
    <div data-testid='home-test'>
      <h2 className='text-white bg-dark fw-bold'>Precios de las criptomonedas según la capitalización de mercado</h2>
      <CoinPagination />
    </div>
  );
};

export default Home;

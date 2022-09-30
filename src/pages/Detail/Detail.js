import React from 'react';
import { useLocation } from 'react-router-dom';
import CoinHistory from '../../components/CoinHistory/CoinHistory';

const Detail = () => {
  const { state } = useLocation();
  const { coinId } = state;
  // console.log('id recibido: ', coinId);
  return (
    <>
    <div>Detail</div>
    <CoinHistory idCoin={coinId} />
    </>
  );
};

export default Detail;

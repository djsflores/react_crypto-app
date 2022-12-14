import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './coinTable.css';
import { setCoin } from '../../app/coinProviderRedux';

const CoinTable = ({ currentItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    dispatch(setCoin(id));
    navigate('/detail');
  };
  const numberWithCommas = (decimalNumber) => {
    return decimalNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <table className='table table-dark table-hover' data-testid='table-test'>
      <thead className='tbl-header'>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Moneda</th>
          <th scope="col">Precio</th>
          <th scope="col">Cambios 24 hs</th>
          <th scope="col">Cap. de mercado</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(currentItems) && currentItems?.map((item) => {
          const profit = item.price_change_percentage_24h > 0;
          return (
            <tr key={item.id} onClick={ () => handleClick(item.id)}>
              <th scope="row">{item.market_cap_rank}</th>
              <td><img className='coin-logo' src={item.image}/> {item.name} <span className='coin-symbol'>{item.symbol.toUpperCase()}</span></td>
              <td>{numberWithCommas(item.current_price.toFixed(2))}</td>
              <td className={ profit > 0 ? 'tbl-cell-green' : 'tbl-cell-red'}>{profit && '+'} {item.price_change_percentage_24h.toFixed(2)}%</td>
              <td>{numberWithCommas(item.market_cap.toString().slice(0, -6))} M</td>
            </tr>);
        })}
      </tbody>
    </table>
  );
};

export default CoinTable;

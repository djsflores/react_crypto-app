import React from 'react';
import { useNavigate } from 'react-router-dom';
import './coinTable.css';

const CoinTable = ({ currentItems }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate('/detail', { state: { coinId: id } });
  };
  return (
    <table className='table table-dark table-hover'>
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
        {currentItems
          && currentItems?.map((item) => (
            <tr key={item.id} onClick={ () => handleClick(item.id)}>
              <th scope="row">{item.market_cap_rank}</th>
              <td><img className='coin-logo' src={item.image}/> {item.name} <span className='coin-symbol'>{item.symbol.toUpperCase()}</span></td>
              <td>{item.current_price}</td>
              <td>{item.price_change_percentage_24h}</td>
              <td>{item.market_cap}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CoinTable;

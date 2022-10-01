import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useFetch from '../../hooks/useFetch/useFetch';
import './coinHistory.css';

const CoinHistory = () => {
  const dataRedux = useSelector((state) => state);
  const moneda = useFetch(`https://api.coincap.io/v2/assets/${dataRedux.coin.results}/history?interval=h1`);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Fluctuaciones',
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };
  const getTimes = () => {
    const times = [];
    moneda?.data?.data.slice(-24).map((value) => (
      times.push(new Date(value.date).getHours() > 12
        ? `${new Date(value.date).getHours() - 12}: ${new Date(value.date).getMinutes()} PM`
        : `${new Date(value.date).getHours()}: ${new Date(value.date).getMinutes()} AM`)
    ));
    return times;
  };
  const getPrices = () => {
    const prices = [];
    moneda?.data?.data.slice(-24).map((value) => (
      prices.push(value.priceUsd)
    ));
    return prices;
  };
  const data = {
    labels: getTimes(),
    datasets: [
      {
        label: 'Precio (ultimas 24 horas) en USD',
        data: getPrices(),
        borderColor: 'rgb(255, 207, 64)',
        backgroundColor: 'rgba(255, 207, 64, 0.5)',
      },
    ],
  };
  return (
    <>
      <div className='container my-5 bg-dark text-light p-2'>
          <h5 className='text-center'>Grafico de Precios (USD)</h5>
        <Line options={options} data={data} data-testid='coin-line' />
      </div>
      <NavLink className='nav-link text-center' to='/'>
        <button type="button" className="btn btn-dark btn-back">Volver</button>
      </NavLink>
    </>
  );
};

export default CoinHistory;

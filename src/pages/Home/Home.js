import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CoinPagination } from '../../components/CoinPagination';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageData, setPageData] = useState([]);
  const getCoinList = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${pageNumber}&sparkline=false`);
    console.log('response: ', res.data);
  };
  useEffect(() => {
    getCoinList();
  }, []);

  return (
    <>
      <div>Home</div>
      <CoinPagination />
    </>
  );
};

export default Home;

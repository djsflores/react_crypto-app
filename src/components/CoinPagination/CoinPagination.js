import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import CoinTable from '../CoinTable/CoinTable';
import useFetch from '../../hooks/useFetch/useFetch';

const CoinPagination = () => {
  const monedas = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false');
  const itemsPerPage = 4;
  // const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // const getCoinList = async () => {
  //   const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=1&sparkline=false');
  //   setItems(res.data);
  // };

  const handlePageClick = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    const newOffset = (event.selected * itemsPerPage) % monedas.data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(items?.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(items.length / itemsPerPage));
    setCurrentItems(monedas.data?.slice(itemOffset, endOffset));
    if (monedas !== null && monedas.data !== null) {
      setPageCount(Math.ceil(monedas.data.length / itemsPerPage));
    }
  // }, [itemOffset, itemsPerPage, items]);
  }, [itemOffset, itemsPerPage, monedas.data]);

  // useEffect(() => {
  //   getCoinList();
  // }, []);

  // console.log('items', items);

  return (
    <>
      <CoinTable currentItems={currentItems} />
      <ReactPaginate
        previousLabel={'< prev'}
        nextLabel={'next >'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default CoinPagination;

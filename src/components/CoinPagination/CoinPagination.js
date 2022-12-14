import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CoinTable from '../CoinTable/CoinTable';
import useFetch from '../../hooks/useFetch/useFetch';
import './coinPagination.css';

const CoinPagination = () => {
  const monedas = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % monedas.data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(monedas.data?.slice(itemOffset, endOffset));
    if (monedas !== null && monedas.data !== null) {
      setPageCount(Math.ceil(monedas.data.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, monedas.data]);

  return (
    <div data-testid='pagination-test'>
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
    </div>
  );
};

export default CoinPagination;

import React from 'react';

const CoinTable = ({ currentItems }) => {
  console.log('current items:', currentItems);
  return (
    <>
      {currentItems
        && currentItems?.map((item) => (
          <div key={item.id}>
            <h3>Item #{item.name}</h3>
          </div>
        ))}
    </>
  );
};

export default CoinTable;

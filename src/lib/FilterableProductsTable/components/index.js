import React from 'react'

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductsTable = ({ products }) => {
  const style = {
    width: '70%',
    float: 'left'
  }

  return (
    <div style={style}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductsTable
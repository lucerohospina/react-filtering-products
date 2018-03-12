import React from 'react';
import PropTypes from 'prop-types';

// y ahora importamos nuestro componente
import FilterableProductsTable from '../FilterableProductsTable/components';

// toda los datos que Main necesita, ahora los recibimos como props
const Main = ({ products }) => {
  return (
    <div>
      <FilterableProductsTable products={products} />
    </div>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main;
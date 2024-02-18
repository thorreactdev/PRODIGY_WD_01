import React from 'react';
import './Breadcrum.css';
// import arrowicon from '../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

  return (
    <div className='breadcrum'>
        HOME <i class='bx bx-chevron-right'></i> SHOP <i class='bx bx-chevron-right'></i> {product.category} <i class='bx bx-chevron-right'></i>{product.name}
    </div>
  )
}

export default Breadcrum
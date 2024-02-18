import React, { useContext } from 'react'
// import all_product from '../Components/assets/all_product';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
import Description from '../Components/DescriptionBox/Description';

const Product = (props) => {
  const {all_product} = useContext(ShopContext);
  const {productid} = useParams();
  const product = all_product.find((e)=>e.id===Number(productid));
  console.log(product);
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProduct product={product}/>
    </div>
  )
}

export default Product
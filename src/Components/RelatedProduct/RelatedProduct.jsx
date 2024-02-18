import React from 'react';
import './RelatedProduct.css';
import data_product from '../assets/data';
import Item from '../Item/Item';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const RelatedProduct = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    pauseOnHover: true,
    speed : 1200,
    cssEase: "linear",
    swipeToSlide: true,
    rtl: true,
  };
 
  return (
    
    <div className='related-product'>
      <h1>Related Products</h1>
        
        <div className="related-product-image">
          <Slider {...settings}>
            {data_product.map((item,i)=>{              
                  return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          
            })}
           </Slider>
        </div>
    </div>
  )
}

export default RelatedProduct
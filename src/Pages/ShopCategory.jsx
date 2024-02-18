import React, { useContext } from "react";
import "../Context/CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
// import mensbanner1 from "../Components/assets/bannermens1.png";
import Item from "../Components/Item/Item";
import Banner2 from "../Components/Baanners/Banner2";
import Banner3 from "../Components/Baanners/Banner3";
import Banner4 from '../Components/Baanners/Banner4';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../Components/Baanners/Banner1";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 700,
    cssEase: "linear",
    pauseOnHover : true
  
  };

  return (
    <div className="shop-category">
      
      <div className="all-banner">
      <Slider {...settings}>
        <Banner4/>
        {/* <Banner1/> */}
        <Banner2/>
        <Banner3/> 
        </Slider> 
      </div> 
      
      
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                Oversized ={item.Oversized}
                off = {item.off}
                rating = {item.rating}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;

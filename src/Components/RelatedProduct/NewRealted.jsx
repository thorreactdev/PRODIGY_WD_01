import React from "react";
import "./NewRealted.css";
import new_collections from "../assets/new_collections";
import Item from "../Item/Item";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewRealted = () => {
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
    <div className="NewRealted">
      <div className="new-related-order">
      <Slider {...settings}>
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              Oversized={item.Oversized}
              off={item.off}
              rating={item.rating}
            />
          );
        })}
        </Slider>
      </div>
    </div>
  );
};

export default NewRealted;

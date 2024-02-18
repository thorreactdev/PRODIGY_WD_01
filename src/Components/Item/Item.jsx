import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import star_icon from '../assets/star_icon.png';

const Item = (props) => {
  // const {handleClick} = props
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt="clothimages"
          onClick={()=>{
            window.scrollTo({
              top: 0,
              behavior : "smooth"
            })
          }}
        />
      </Link>
      {/* onClick={window.scrollTo(0,0)} */}
      <p>{props.name}</p>
      {/* <hr className="item-hr"/> */}
      {/* <hr/> */}
      <p style={{color : "#58595b" , fontSize : "13px"}}>{props.Oversized}</p>
      <div className="items-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
        <div className="item-price-off" style={{color : "orangered",fontSize:"14.7px", fontWeight : "550"}}>{props.off}</div>
       
      </div>
      <div className="rating">
        <span>{props.rating}</span>
        <i className='bx bxs-star'></i>
       {/* <img src={star_icon} alt="star_icon"/> */}
      </div>
     
    </div>
  );
};

export default Item;

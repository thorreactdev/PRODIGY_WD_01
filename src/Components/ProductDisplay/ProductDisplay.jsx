import React, { useContext, useState, useEffect } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import null_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { CheckCircle2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductDisplay = (props) => {
  const [item, setItem] = useState(false);
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const notify = () => toast.success('Item Added To Cart', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const handleAddToCart = (productId) => {
    addToCart(productId);
    notify();

    // setItem(true);
  };

  useEffect(() => {
    // Hide the message after 3 seconds
    const timer = setTimeout(() => {
      setItem(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [item]);
  return (
    <div className="ProductDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-left-img">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-main-img">
          <img src={product.image} alt="" className="main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <div className="productdisplay-right-content">
          <h1>{product.name}</h1>
          <div className="product-display-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={null_icon} alt="" />
            <img src={null_icon} alt="" />
            <p>(100)</p>
          </div>
          <div className="product-display-right-prices">
            <div className="new-price">${product.new_price}</div>
            <div className="old-price">${product.old_price}</div>
            {/* <div className="pro-off">${product.off}</div> */}
          </div>
          <div className="product-right-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              asperiores iusto totam vero facere dicta cupiditate inventore
              repellat veniam sit.
            </p>
          </div>
          <div className="product-right-size">
            <h2>Select Size</h2>
            <div className="size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
        </div>
        <div className="right-cart-content">
          <p
            className="cart-btn"
            onClick={() => {
              handleAddToCart(product.id);
            }}
          >
            Add to cart
          </p>
          <p className="category">
            <span>Category: </span>Mens , Tshirt , Shirt
          </p>
          <p className="tags">
            <span>Tags: </span>Modern , New collection
          </p>
        </div>
        {/* {item && 
            <div className='added-tocart-msg-container'>
            <div className={`added-tocart-msg ${item ? 'slide-in' : 'slide-out'}`}>
            <div className="item-msg">
            <span><CheckCircle2 color="#14b33c" size={"30px"} /></span>
            <p className='added-msg'>Item Added To Cart</p>
            
            </div>
            <div className="loading-bar"></div>
        </div>
        </div>
        } */}
      
        <div className="toast-container">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

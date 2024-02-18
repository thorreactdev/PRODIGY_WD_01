import React, { useContext, useState, useEffect } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import empty_cart from "../assets/emptycart2-removebg-preview.png";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = (props) => {
  
  const { all_product, cartItem, removeFromCart, getTotalcart , getSubTotal} = useContext(ShopContext);
  const{ totalAmount , shippingFee} = getTotalcart();
  const [promocode, setPromocode] = useState("");
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(false);
  const [promoCodeError, setPromoCodeError] = useState("");
  const [discount, setDiscount] = useState(0);
  // const[remove , setRemove] = useState(false);
  // const{product} = props;
  // const [cartItems, setCartItem] = useState({});
  const notify = () =>
    toast.success("Item Removed from the Cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleRemove = (productId) => {
    removeFromCart(productId);
    notify();
    // setRemove(true);
    // setTimeout(()=>{
    //   setRemove(false);
    // }, 3000);
  };

  const handlePromoCodeChange = (e) => {
    setPromocode(e.target.value.toUpperCase());
    console.log(e.target.value);
  };
  const promoCodeDiscounts = {
    JS2023: 0.1, // 10% discount
    SPECIAL25: 0.25, // 25% discount
    SUMMERDEAL: 0.15, // 15% discount
    // Add more promo codes as needed
  };
  const isValidPromoCode = (code) => {
    // Check if the entered promo code is in the promoCodeDiscounts object
    return promoCodeDiscounts.hasOwnProperty(code);
  };

  const handleSubmitPromocode = () => {
    if (isValidPromoCode(promocode)) {
      setIsPromoCodeValid(true);
      setPromoCodeError("");
      // Apply the discount dynamically based on the entered promo code
      setDiscount(promoCodeDiscounts[promocode]);
    } else {
      setIsPromoCodeValid(false);
      setPromoCodeError("Not a valid Promo code");
      setDiscount(0);
    }
  };
  const discountedTotalAmount = isPromoCodeValid ? totalAmount - totalAmount * discount : totalAmount;

  if (Object.values(cartItem).every((quantity) => quantity === 0)) {
    return (
      <div className="empty-cart">
        <img src={empty_cart} alt="empty_cartimg" />
        <p>Your Cart is Empty</p>
        <p style={{ fontSize: "17px", fontWeight: 400, textAlign: "center" }}>
          Add Some Products To Your Cart 😊
        </p>
        <Link to="/">
          <button
            className="return-btn"
            onClick={() => {
              window.scroll({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Return To Shop
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="CartItem">
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div className="cart-item-main2">
              <div className="cart-items-images">
                <Link to={`/product/${e.id}`}>
                  <img
                    src={e.image}
                    alt=""
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  />
                </Link>
                <div className="cart-items-content">
                  <h2 className="name">{e.name}</h2>
                  <p className="oversized">{e.Oversized}</p>
                  <div className="prices-items-cart">
                    <p className="newprice">${e.new_price}</p>
                    <p className="oldprice">${e.old_price}</p>
                    {e.off ? <p className="off">{e.off}</p> : null}
                  </div>

                  <div className="delivery-details">
                    <p className="return">{e.return}</p>
                    <p className="delivery">{e.Delivery}</p>
                  </div>
                  <div className="remove">
                    <button
                      className="remove-btn"
                      onClick={() => {
                        handleRemove(e.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {/* {remove && 
                <div className="remove-container">
                    <div className="remove-content">
                    <span><CheckCircle2 color="#14b33c" size={"30px"} /></span>
                      <p>Item Removed from The Cart</p>
                    </div>
                    <div className="loading-bar"></div>
                  </div>
                } */}
                <div className="toast-container">
                  <ToastContainer
                    position="top-center"
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
        }
        return null;
      })}
      <div className="cartItem-down">
        <div className="cartitem-total">
          <h2>Payment Summary</h2>
          <div className="cart-item-total-item">
            <p>Subtotal</p>
            <p>${getSubTotal()}</p>
          </div>
          <div className="cart-item-total-item">
            <p>Shipping Fee</p>
            <p>${shippingFee}</p>
          </div>
          <div className="cart-item-total-item">
            <p>Discount</p>
            <p>{isPromoCodeValid ? (discount * 100).toFixed(0) + "%" : "None"}</p>
          </div>
          <div className="cart-item-total-item">
            <p>Delivery Fee</p>
            <p>Free</p>
          </div>
          <div className="cart-item-total-item">
            <p>COD</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-item-total-item">
            <p>Grand Total</p>
            <p>${discountedTotalAmount.toFixed(2)}</p>
          </div>
          <button className="checkout-btn">Proceed To Checkout</button>
        </div>

        <div className="caritem-promocode">
          <p>If You Have a Promo code, Enter it Here</p>
          <div className="promobox">
            <input
              type="text"
              placeholder=" Enter Promo Code"
              value={promocode}
              onChange={handlePromoCodeChange}
            />
            {promoCodeError && (
              <p
                style={{ color: "red", fontSize: "13px", marginBottom: "0px" }}
              >
                {promoCodeError}
              </p>
            )}
            {isPromoCodeValid && (
              <span className="check-promo-code">
                <CheckCircle2 color="#1fb253" size="30" />
              </span>
            )}
            <br />
            <button className="promo-btn" onClick={handleSubmitPromocode}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

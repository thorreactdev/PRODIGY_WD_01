import React, { useContext } from "react";
import "./MyOrder.css";
import { ShopContext } from "../../Context/ShopContext";
import shopping_bag from '../assets/shop-bag.png';
import { Link } from "react-router-dom";
import NewRealted from "../RelatedProduct/NewRealted";
// import CartItem from '../CartItem/CartItem';
// import RelatedProduct from '../RelatedProduct/RelatedProduct';

const MyOrder = () => {
  const { cartItem, all_product } = useContext(ShopContext);
  const hasOrder = Object.values(cartItem).some((quantity) => quantity > 0);
  return (
    <div className="main-neworder">
        <Link to="/viewprofile" style={{textDecoration : "None" , color : "black"}}>
        <div className="back-to-my-account">
            <span>
            <i class='bx bx-caret-left'></i>
            </span>
            <p>Back To View Profile</p>
        </div>
        
        </Link>
      <h1 className="your-order-text">Your Order</h1>
      <div className="line-wala-div"></div>
      {hasOrder ? (
        <div className="MyOrder2">
          {Object.keys(cartItem).map((itemId) => {
            const quantity = cartItem[itemId];
            if (quantity > 0) {
              const product = all_product.find((p) => p.id === Number(itemId));
              return (
                <div className="myorder-content">
                  <div className="order-images">
                    <img src={product.image} alt="product" />
                  </div>
                  <div className="product-content">
                    <p style={{ fontSize: "1.4rem", fontWeight: "630" }}>
                      {product.name}
                    </p>
                    <p>Size : L</p>

                    <div className="order-prices">
                      <p style={{ fontWeight: "500" }}>${product.new_price}</p>
                      <p
                        style={{
                          textDecoration: "line-through",
                          color: "grey",
                        }}
                      >
                        ${product.old_price}
                      </p>
                      <p>{product.off}</p>
                    </div>
                    <p style={{ color: "#42a2a2", fontWeight: "420" }}>
                      {product.return}
                    </p>
                    <div className="delivery-wala-div">
                      <span>
                        <i
                          class="bx bxs-package"
                          style={{ color: "green", fontSize: "1.2rem" }}
                        ></i>
                      </span>
                      <p>{product.Delivery}</p>
                    </div>

                    <button className="order-info-btn">Order Info</button>
                  </div>
                  

                </div>
              
                
              );
            }
            return null;
          })}
          <div className="related-product-buy-more">
              <h1>Buy More Related Product</h1>
              <NewRealted/>
          </div>
        </div>
        
      ) : (
        <div className="empty-product-wala-div">
            <img src={shopping_bag} alt="shoppbag"/>
            <p>You have no orders yet. Start shopping!</p>
           <Link to="/"> <button className="start-shop-btn">Start Shopping</button></Link>
        </div>
      )}
    </div>
  );
};

export default MyOrder;

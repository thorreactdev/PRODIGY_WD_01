import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import {  Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useAuth } from "../../store/auth";



const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItem} = useContext(ShopContext);
  const {isLoggedin ,user, LogoutUser} = useAuth();
 

  return (
    <div className="navbar">
      <div className="nav-logo">
        <NavLink to="/">
          <img src={logo} alt="logo"/>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <p>Just Shop</p>
        </NavLink>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="nav-list"
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            Shop
          </NavLink>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
          className="nav-list"
        >
          <NavLink to="/mens" style={{ textDecoration: "none", color: "white" }}>
            Mens
          </NavLink>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
          className="nav-list"
        >
          <NavLink to="/womens" style={{ textDecoration: "none", color: "white" }}>
            Womens
          </NavLink>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("funky");
          }}
          className="nav-list"
        >
          <NavLink to="/funky" style={{ textDecoration: "none", color: "white" }}>
            Funky Womens
          </NavLink>
          {menu === "funky" ? <hr /> : <></>}
        </li>
      </ul>
      
      
      <div className="nav-login-cart">
        
            {/* <button className="login-btn">Sign Out</button> */}
          {
            isLoggedin ? (
            <NavLink to='/logout'>
            <button className="login-btn" onClick={LogoutUser}>
              Log Out
            </button>
           </NavLink>
            ):(
              <>
               <NavLink to='/signup'>
                <button className="login-btn">
                   Sign Up
                </button>
              </NavLink>
               <NavLink to='/login'>
                <button className="login-btn">
                   Log in
                </button>
              </NavLink>


              </>
            )
          }
           
           
           <div>
            <Link to='/viewprofile'style={{"textDecoration": "None", "color" : "white"}} className="user-account">
            <span className="user-icon"><i class="fa-solid fa-user"></i></span>
            {
              !isLoggedin ? (
                <span></span>
              ):(
                <span className="text-sm">{user[0]?.name}</span>
              )

            }
            </Link>
            
            </div>
           
        
        <NavLink to="/cart">
          <img
            src="data:image/png;base64,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"
            alt="cartimage"
          />
        </NavLink>
        <div className="navbar-count">{getTotalCartItem()}</div>
      </div>

    </div>
  );
};

export default Navbar;

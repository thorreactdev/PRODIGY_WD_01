import React, { useContext } from "react";
import "./ViewProfile.css";
import UserSidebar from "../UserPersonalInformation/UserSidebar";
import AccountInfo from "../UserPersonalInformation/AccountInfo";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonalInfo from "../UserPersonalInformation/PersonalInfo";
import { ShopContext } from "../../Context/ShopContext";
import shopping_bag from "../assets/shop-bag.png";

const ViewProfile = () => {
  const { activepage } = useParams();
  const { all_product, cartItem, getTotalcart } = useContext(ShopContext);
  const { totalAmount } = getTotalcart();
  const hasOrders = Object.values(cartItem).some((quantity) => quantity > 0);
  return (
    <div className="ViewProfile">
      <div className="viewprofile-left-side">
        {/* SideBar div */}
        <UserSidebar />
      </div>
      <div className="viewprofile-right-side">
        <div className="Accountinfo">
          <div className="user-dashboard-text">
            <h2>User dashboard</h2>
            <div className="profile-image-div" style={{ borderColor: "#fff" }}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                alt="avatar"
              />
              {/* <i class="bx bxs-user"></i> */}
            </div>
          </div>

          <div className="main-box-content">
            <Link
              to="/personalinfo"
              style={{ textDecoration: "None", color: "black" }}
            >
              <div className="personal-info-box">
                <p>Personal Information</p>
                <span
                  className="user-icon-span-new"
                  style={{ borderColor: "#fff" }}
                >
                  <i class="bx bxs-user"></i>
                </span>
              </div>
            </Link>

            <Link
              to="/myorder"
              style={{ textDecoration: "None", color: "black" }}
            >
              <div className="personal-info-box1">
                <p>My Order</p>
                <span
                  className="user-icon-span-new"
                  style={{ borderColor: "#fff" }}
                >
                  <i class="bx bxs-shopping-bag-alt"></i>
                </span>
              </div>
            </Link>
            <Link
              to="/address"
              style={{ textDecoration: "None", color: "black" }}
            >
              <div className="personal-info-box2">
                <p>My Address</p>
                <span
                  className="user-icon-span-new"
                  style={{ borderColor: "#fff" }}
                >
                  <i class="bx bx-location-plus"></i>
                </span>
              </div>
            </Link>
            <div className="personal-info-box3">
              <p>Legal Notice</p>
              <span
                className="user-icon-span-new"
                style={{ borderColor: "#fff" }}
              >
                <i class="bx bx-notepad"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="recent-order-wala-div">
          <h2>recent Orders</h2>

          {hasOrders ? (
            <div className="content-content">
              {Object.keys(cartItem).map((itemId) => {
                const quantity = cartItem[itemId];
                if (quantity > 0) {
                  const product = all_product.find(
                    (p) => p.id === Number(itemId)
                  );
                  // const slicedproductName = product.name.slice(14);
                  return (
                    <div className="order-information">
                      <p>#1234</p>
                      <p>{product.name}</p>
                      <p>${product.new_price}</p>
                      <p>2</p>
                      <p>{product.id}</p>
                      <button className="removekaro">Remove</button>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <div className="no-recent-orders-wala-div">
              <img src={shopping_bag} alt="shoppbag" />
              <p>No Orders Yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;

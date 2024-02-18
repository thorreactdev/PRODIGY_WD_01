import React from 'react';
import './UserSideBar.css';

const UserSidebar = () => {
  return (
    <div className='UserSidebar'>
        <div className="main-sidebar-conatiner">
            <div className="wrap-content">
                <div className="Accountsetting">
                    <span className='user-icon-span'><i class='bx bxs-user'></i></span>
                    <p>Account Setting</p>
                </div>
                <div className="MyOrder1">
                    <span className='user-icon-span'><i class='bx bxs-shopping-bag-alt' ></i></span>
                    <p>My Order</p>
                </div>
                <div className="Address-div">
                    <span className='user-icon-span'><i class='bx bx-location-plus' ></i></span>
                    <p>Address</p>
                </div>
                <div className="notice-wala-div">
                    <span className='user-icon-span'><i class='bx bx-notepad' ></i></span>
                    <p>Legal Notice</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSidebar
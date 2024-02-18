import React from 'react';
import './Banner3.css';
import banner_3 from '../assets/banner_3_new.png';
import { Link } from 'react-router-dom';

const Banner3 = () => {
  return (
    <div className="new-banner3">
        <div className="main-new-banner3">
            <div className="new-mens-banner3">
             <h1 className="banner3-h1">Cool Funky <br/></h1>
             <h1 className='new-h1'>Corner Womens</h1>
             <p className="banner3-para">Funky Creation Designed Specifically to Spread Happiness</p>
             <Link to='/funky'><button className='exp-btn' onClick={()=>{
              window.scrollTo({
                top : 600,
                behavior : "smooth",
              })
             }}>Explore Now</button></Link>
            </div>
        <div className="banner3-img">
           <img src={banner_3} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Banner3
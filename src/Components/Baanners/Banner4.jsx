import React from 'react';
import './Banner4.css';
import mens_oversizedbanner from '../assets/mensbanneroversized.png';
import { Link } from 'react-router-dom';

const Banner4 = () => {
  return (
    <div className='Banner4'>
        <img src={mens_oversizedbanner} alt='random'/>
           <Link to="/mens"><button className='explore-btn2' onClick={()=>{
            window.scrollTo({
              top : 650,
              behavior : "smooth",
            })
           }}>Explore Now</button></Link>
    </div>
  )
}

export default Banner4
import React, { useEffect, useState } from 'react';
import './Banner2.css';
import mens_banner345 from "../assets/mens_banner345.png";
import mens_banner123 from "../assets/mens_banner321.png";
import banner3 from "../assets/banner3.png";
// import banner2 from '../assets/banner2.png';
// import banner1 from '../assets/banner1.png';
// import banner4 from '../assets/banner4.png';
import banner5 from '../mensimage/asset 14.webp';
import banner6 from '../mensimage/asset 15.webp';
import banner7 from '../mensimage/asset 18.webp';

const Banner2 = () => {
    const newbannerImages = [mens_banner123, banner5 , banner6 , banner7 , banner3];
    let CurrentImageIndex =0;
    useEffect(()=>{
        const ImageFirst = document.getElementById('firstimage');
        const newImage = ()=>{
            ImageFirst.src = newbannerImages[CurrentImageIndex];
            CurrentImageIndex = (CurrentImageIndex+1) % newbannerImages.length;
        }
        const intervalId = setInterval(newImage , 1500);
        console.log(intervalId);
 
    },[]);


   
  return (
    <div className='new-shop-category'>
        <div className="new-main-banner">
            <div className="new-mens-banner">
            <h1 className="new-h1">Own Your Crazy</h1>
           <h1 className="new-code-btn">Use Code : JS2023</h1>
           <h2 style={{fontSize:"2.5rem", color : "white", letterSpacing : "2px"}}>And Get<br/> 20% CASHBACK <br/> ON FIRST ORDER</h2>
        </div>
        <div className="new-mens-banner-img">
          <img src={newbannerImages[CurrentImageIndex]} alt="" className="banner2" id="firstimage"/>
          <img src={mens_banner345} alt="" className="banner3"/>
        </div>
        </div>
    </div>
  )
}

export default Banner2
import React, { useEffect } from 'react'
import './Hero.css';
import banner3 from '../assets/banner3.png';
import banner2 from '../assets/banner2.png';
import banner1 from '../assets/banner1.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';

const Hero = () => {

    const ImageSources =[banner1, banner2, banner3 , banner4 , banner5];
    let CurrentImageIndex =0;
    const imglength = ImageSources.length;

    useEffect(()=>{
        const rotatingImage = document.getElementById('rotating-image');
        const ChangeImage =()=>{
            rotatingImage.src= ImageSources[CurrentImageIndex];
            CurrentImageIndex = (CurrentImageIndex + 1) % imglength;
        };
        // ChangeImage();
        const interval = setInterval(ChangeImage,1500);
        return ()=>{
            clearInterval(interval);
        }

    },[]);
  return (
    <div className='main-hero'>
        <div className="hero-left">
           
            <h3 className='new-arrival'>New Arrivals</h3>
            <h1 className='big-sale'>BIG SALE!</h1>
            <a href='#' className='offer-btn'>Up to 50% OFF</a>
            <p className='offer-para'>Elevate Your Style with Unbeatable Deals. Find Fashion, Home,<br/> and More All in One Place. Shop Now and Make Every Day <br/>Extraordinary</p>
            <a href='#' className='shop-now-btn'>Shop Now</a>
        </div>
        <div className="hero-right">
        <img src={ImageSources[0]} alt='bannerimage' id='rotating-image'/>
        </div>
    </div>
  )
}

export default Hero
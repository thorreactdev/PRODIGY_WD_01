import React, { useEffect, useState } from 'react'
import './Offer.css';
import banner5 from '../assets/banner5.png';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';


const Offer = () => {
   
    const Colorcode =["#a2c7d1" ,"#c7c2d3" ,"#88c399" ,"#f6d8ae" ,"#FFC0CB" ,"#4e9ae2"];
    let CurrentColorcode =0;
    const colorlength = Colorcode.length;

    useEffect(()=>{
        const offerImgcontainer = document.getElementById('offer-img-container');
        const offerImg = document.getElementById('offer-img');
        const ChangeColor = ()=>{
            offerImgcontainer.style.backgroundColor = Colorcode[CurrentColorcode];
            CurrentColorcode = (CurrentColorcode + 1) % colorlength;
        }
        const interval = setInterval(ChangeColor, 900);
        return ()=>{
            clearInterval(interval);
        }

    },[]);
  return (
    <div className='offer-main'>
      <div className="offer">
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Funky Women Product product</p>
             
           <Link to='/funky'><button className='offer-btn2' onClick={()=>{
              window.scrollTo({
                top : 550,
                behavior : "smooth",

              })
           }}>Check Now</button></Link>
           {/* <button className='mbtn offer-btn2' onClick={()=> setShowMoadal(true)}>Modal</button> */}
        </div>
        <div className="offer-right" id='offer-img-container'>
            <img src={banner5} alt='just_an_image' id='offer-img'/>
        </div>
        </div>
        
    </div>
  )
}

export default Offer
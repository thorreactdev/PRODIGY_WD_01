import React from 'react'
import './Footer.css';
import footerlogo from '../assets/logo_big.png';


const Footer = () => {
    const ScrollTop = ()=>{
        window.scrollTo({
            top : 0,
            behavior :"smooth",
        });
    };
    
  return (
    <div className='footer'>
        <div className="footercontent">
            <ul>
                <p>Online Shopping</p>
                <a>Mens</a>
                <a>Womens</a>
                <a>Kids</a>
                <a>Shop</a>
            </ul>

            <ul>
                <p>Useful Links</p>
                <a>Blog</a>
                <a>Carrer</a>
                <a>Sitemap</a>
                <a>Corporate Information</a>
                <a href='/about' style={{"textDecoration" : "None", color : "white"}}>About</a>
            </ul>
            <ul>
                <p>Navigation Links</p>
                <a>Home</a>
                <a>Login</a>
                <a>Signup</a>
                <a>Shop</a>
            </ul>

            <ul>
                <p>Social Media</p>
                 <a>Facebook</a>
                 <a>Instagram</a>
                 <a>Linkedin</a>
                 <a>Twitter</a>
            </ul>
            
        </div>
        
        <hr className='hr'/> 
        <div className="footer-logo">
            <img src={footerlogo} alt='footerimg'/>
            <span style={{color : "pink",fontSize:"18px"}}>Just Shop</span>
            <div className="language">
                <p>English <i class='bx bxs-down-arrow'></i></p>     
            </div>
            
        </div>
        <div className="social-icon">
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-facebook'></i>
                <i className='bx bxl-linkedin'></i>
                <i className='bx bxl-twitter'></i>
        </div>
        <div className="bactotopbtn">
            <span id='back-to-top' onClick={ScrollTop}><i className='bx bxs-up-arrow' ></i></span>
        </div>
        <div className="footer-text">
            <p>Copyright @ 2023 || All Rights Reserved</p>
        </div>
    </div>
   
  )
}

export default Footer
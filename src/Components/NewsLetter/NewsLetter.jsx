import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter-content">
        <h1>get exclusive offer on your email</h1>
        <h2>Subscribe to our newsletter and stay updated</h2>
        </div>
        <div className="input-box">
            <input type='email' placeholder='Your Email id' className='input'/>
            <span className='subs-btn'>Subscribe</span>
        </div>
    </div>
  )
}

export default NewsLetter
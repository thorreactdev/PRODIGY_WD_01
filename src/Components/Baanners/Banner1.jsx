import React from 'react';
import { useEffect, useState } from 'react';
import mensbanner1 from "../assets/newbanner2024.jpg";
import mensbanner2 from "../assets/2024banner.jpg";
import './Banner1.css';

const Banner1 = () => {

  const countDownDate = new Date("Dec 30, 2023 22:47:30").getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(x);
        setTimeRemaining("Sale Over Time's Up");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  }, [countDownDate]);
  return (
    <div className='Banner1'>
        <div className="main-banner">
            <img src={mensbanner2} alt=''/>
        </div>
        <div className="time-showing">
        {/* <p style={{fontSize:"1.4rem" , textAlign: "center"}}>Expires In</p> */}
        <div className="days">
          <p className='days-value'>0{timeRemaining.days}<span> : </span></p>
          <p className='dname'>days</p>
        </div>
        <div className="hour">
          <p className='hour-value'>0{timeRemaining.hours} : </p>
          <p className='yname'>hour</p>
        </div>
        <div className="minutes">
          <p className='minute-value'>0{timeRemaining.minutes} : </p>
          <p className='mname'>min</p>
        </div>
        <div className="seconds">
          <p className='seconds-value'>{timeRemaining.seconds}</p>
          <p className='mname'>sec</p>
        </div>

        </div>
      </div>
  )
}

export default Banner1
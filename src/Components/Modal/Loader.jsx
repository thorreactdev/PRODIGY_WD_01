import React, { useEffect, useState } from "react";
import './Loader.css';
import yaloader from '../assets/Animation - 1703177877377.gif';
const Loader = () => {
    const[loader , setLoader] = useState(true);

    useEffect(()=>{
        const handleLoad2 = ()=>{
            const timer = setTimeout(()=>{
                setLoader(false)
            },4000);

            return () => {
                clearTimeout(timer);
              };
        };
        window.addEventListener("load" , handleLoad2);


    },[])

  return (
    
    <div className="Loader">
    {
        loader &&
         <div className="loader">
            <img src={yaloader} alt="loader"/>
        </div>
    }

    </div>
  );
};

export default Loader;

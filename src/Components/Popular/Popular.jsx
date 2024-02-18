import React, { useState, useEffect } from 'react'
import './Popular.css';
import data_product from '../assets/data';
import Item from '../Item/Item';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Popular = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

 
  return (
    <div className='popular'>
        <h1>Popular in womens</h1>
        <hr/>
        <div className="popular-items">
            {
              showLoader ? (
                Array.from({length : 8}).map((_,index)=>(
                  <div key={index} className='loader-class'>
                  <Skeleton height={260} width={300} />
                  <div style={{paddingLeft : "15px" , paddingBottom : "15px" , paddingTop : "20px"}}>
                    <Skeleton height={20} width={280} />
                    <Skeleton height={20} width={240} count={3}/>
                  </div>
                </div>

                ))
                

              ):(
                data_product.map((item,i)=>{
                  return <Item 
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  Oversized ={item.Oversized}
                  off = {item.off}
                  rating = {item.rating}
                    /> 
                }
              )
              )
            }
          
        </div>

    </div>
  )
}

export default Popular
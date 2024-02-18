import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/New Collection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'




const Shop = () => {

  return (
    <div>
     
      <Hero/>
      <Popular/>
      <Offer/> 
      <NewCollection/>
      <NewsLetter/>
     
    </div>
  )
}

export default Shop
import React from 'react'
import './NewCollection.css';
import new_collections from '../assets/new_collections';
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>Our New Collection</h1>
        <hr/>
        <div className="new-collection-cloths">
            {new_collections.map((item,i)=>{
                return <Item 
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                Oversized ={item.Oversized}
                off = {item.off}
                rating = {item.rating}/>

            })}

        </div>
    </div>
  )
}

export default NewCollection
import React, { createContext, useState } from 'react'
import all_product from '../Components/assets/all_product';
import CartItem from '../Components/CartItem/CartItem';
export const ShopContext = createContext(null);

const getDefault = ()=>{
    let cart={};
    let product_length = all_product.length;
    for(let i = 0; i < product_length+1 ; i++){
        cart[i]=0;
    }
    return cart;
}
   

const ShopContextProvider = (props)=>{
    
    const shippingFee = 50;
    const[cartItem , setCartItem] = useState(getDefault());
    // console.log(cartItem);

    const addToCart =(itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItem);
        console.log(itemId);
    }
    const removeFromCart =(itemId) =>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    
    }

    const getSubTotal = ()=>{
        let subTotal =0;
        for( let item in cartItem){
            if(cartItem[item]>0){
                let subTotalInfo = all_product.find((product)=>product.id === Number(item));
                subTotal += subTotalInfo.new_price * cartItem[item];
            }
        }
        return subTotal;
    }
    const getTotalcart = () => {
        let totalAmount = 0;
        // let totalShippingFee = 0;
        for(let item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=> product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItem[item]; 
            }
           
        }
        
        totalAmount += shippingFee;
        return {totalAmount , shippingFee}
    }

    const getTotalCartItem = ()=>{
        let totalItem =0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }
    
   const ContextValue = {all_product , cartItem ,addToCart , removeFromCart , getTotalcart , getTotalCartItem ,getSubTotal};
   
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};
export default ShopContextProvider;


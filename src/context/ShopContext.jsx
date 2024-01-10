import React, { createContext, useEffect, useState } from "react";
import all_product from '../assets/all_product'
import { json } from "react-router-dom";

export const ShopContext = createContext(null);

function getDefaultCart(){
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
         cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart)
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems)
    }

    const remove = (itemId) => {
        setCartItems((prev => ({...prev,
        [itemId]:0}
        )))
        console.log('Done')
        }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const itemsInCart = () => {
        let totalItems = 0;
        for(let item in cartItems)
        {
            if(cartItems[item]>0){
                totalItems += cartItems[item] 
            }
        }
        return totalItems
    }

    const totalAmount = () => {
        let total = 0;
        for(let item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                total += cartItems[item] * itemInfo.new_price
            }
        }
        return total

    }

    // useEffect(()=>{
    //     localStorage.setItem('cart',(itemsInCart))
    // },[onload])
    // useEffect(()=>{
    //     localStorage.getItem('cart')
    // },[onload])
   
    
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,totalAmount,itemsInCart,remove}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
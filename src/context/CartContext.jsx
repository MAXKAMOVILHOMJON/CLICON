import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const CartContextCard = createContext();

const CartContext = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (el) => {
    setCart((prev) => {
      return [...prev, {...el , qty:1}]
    })
  }

   const removeToCart = (el) => {
     setCart((prev) => {
       return prev.filter((item) => item.id !== el.id)
     });
   };


  return <CartContextCard.Provider value={{cart , setCart , addToCart , removeToCart}}>{children}</CartContextCard.Provider>
}

export default CartContext;
import { createContext } from 'react'
import { useState } from 'react';

export const LikeContextCard = createContext()

const LikeContext = ({children}) => {
  const [like, setLike] = useState([]);

  const addToLike = (id) => {
    setLike((prev) => {
      return [...prev , id];
    })
  }

   const removeToLike = (id) => {
     setLike((prev) => {
       return prev.filter((item) => item !== id);
     });
   };

  return <LikeContextCard.Provider value={{like, setLike , addToLike , removeToLike}} >{children}</LikeContextCard.Provider>
}

export default LikeContext
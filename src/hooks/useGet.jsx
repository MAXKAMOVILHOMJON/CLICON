import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGet = ({url , id = ""}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async() => {
    try{
      let res = await axios.get(`https://dummyjson.com/${url}/${id}`);
      setData(res)      
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  } , [url , id])
  

  return {data , loading}
}

export default useGet
/* eslint-disable react-hooks/set-state-in-effect */
import React from 'react'
import axios from "axios"
import { useEffect , useState } from 'react';

const Axios = () => {
    const [data , setData]=useState([])
    const API= "URL";
    const getMovies= async ()=>{
        const res = await axios.get(API)
        setData(res.data.search);
    }

    useEffect(()=>{
        getMovies();
    },[]); // by this we render the use effect only one time

  return (
    <>
    <div>
        {data.map((curElem)=>{
            return (
                <>
                <h1>{curElem}</h1>
                </>
            )
        })}
    </div>
    </>
  )
}

export default Axios
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import './Navbar.css'

export default function navbar() {
    const [count , setCount]= useState (0)

    useEffect(()=>{
        alert('Navbar is called')
    },[count])
  return (
    <div>
        <h1>count {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>
            Increment
        </button>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail ]=useState("")
    const [password, setPassword ]=useState("")

    const [allEntry, setAllEntry]=useState([])

    const SubmitForm =(e)=>{
        e.preventDefault()

        const newEntry = { email:email , password:password} ;

        setAllEntry(...allEntry , newEntry)

    }
  return (
    <>
    <form action="submit" onSubmit={()=>{SubmitForm}}>
        <div>
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" id="email" autoCapitalize='off' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="password" >Password</label>
            <input type="text" name="password" id="password" autoCapitalize='off' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <br />
        <button type="submit">Login</button>
    </form>
    </>
  )
}

export default BasicForm
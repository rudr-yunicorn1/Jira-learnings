import React from 'react'
// this is a component file and we are learnig the react comonent 

const Nevigation = ({name}) => {  
  return ( // heres the return function which will only return one perameter 
    <> 
    {/* iam using propes in the h1 the name is prop where iam taking the value form the mention at app.js */}
    <div>Nevigation</div>
    <h1>hello vivek</h1>

    <h1>welcom {name}</h1>
    {/* name is a prop */}

    </>
  )
}

export default Nevigation
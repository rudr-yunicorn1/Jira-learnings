import { useState } from 'react'

function NameInput() {
  const [name, setName] = useState('')

  return (
    // below iam using the input functionality which hoda the value fore name
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name is: {name}</p>
    </div>
    // here the above target holdes almost everything in which we only need the value of name
    
  )
}

export default NameInput

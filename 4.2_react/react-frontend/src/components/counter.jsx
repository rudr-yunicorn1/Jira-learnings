import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
export default Counter

// above iam defining the state where it is incremneting by one in every click 
// count = the value , setCount = the function , (0) = is the inintial value 

// there also a state rule we can never update the state directaly like count +1 we need touse the function setcount(count +1)
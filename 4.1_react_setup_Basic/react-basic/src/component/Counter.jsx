
// It holds dynamic data

// When state changes → UI updates automatically

// Each component manages its own state

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // this is the state

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;


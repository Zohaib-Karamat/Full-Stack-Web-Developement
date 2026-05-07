import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

// useMemo is a React hook that memoizes a computed value and recalculates it only when dependencies change, helping optimize performance by avoiding unnecessary calculations.
// Its mainly used to memoize a value that is expensive to compute, so that it is only recomputed when necessary, rather than on every render. This can help improve the performance of your React application by avoiding unnecessary calculations and re-renders.

function App() {
  const [count, setCount] = useState(0)
  const heavyCalculation = useMemo(() => {
    console.log("Performing heavy calculation...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {  
      sum += i;
    }
    return sum;
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <h2>{heavyCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import { Child } from './Child'
import { useCallback } from 'react'

// useCallback is a React hook that returns a memoized version of a callback function, which only changes if one of the dependencies has changed. It is used to optimize the performance of child components that rely on reference equality to prevent unnecessary renders. By using useCallback, you can ensure that the same function instance is passed to child components, preventing them from re-rendering unless necessary.
function App() {
  const [count, setCount] = useState(0)
  function handleClick (){
    console.log("Button clicked!");
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  )
}

export default App

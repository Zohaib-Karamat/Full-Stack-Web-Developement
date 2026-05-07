import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Previous } from './Previous';
import Time from './Time';

function App() {
  const inputRef = useRef();
  function inputfocus() {
    inputRef.current.focus();
  }
  const ref = useRef(0);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={inputfocus}>Focus Input</button>

      <h1>{ref.current}</h1>
      <button onClick={() =>
        { console.log(ref.current)
          ref.current++}}>Increment</button>
      <button onClick={() => { console.log(ref.current); ref.current--; }}>Decrement</button>











      <Previous />








      <Time/>
    </>
  )
}

export default App

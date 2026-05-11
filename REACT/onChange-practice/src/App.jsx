import { useRef, useState } from 'react'

 // onChange  trigger a function every time input changes
          //   work with like input , textarea , select , radio button

          
function App() {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [country, setcountry] = useState()
  function handleName(event) {
    setName(event.target.value);
  }
  function handleComment(event) {
    setComment(event.target.value);
  }
  function handleCountry(event) {
    setcountry(event.target.value);
  }
  return (
    <>
      <h1>Input Name</h1>

      <input type="text" onChange={()=>handleName(event)} width={"10px"}  />
      <p>Name: {name}</p>


      <h1>Text Area Comment</h1>
      <textarea name="comment" onChange={()=>{handleComment(event)}}/>
      <p>Comment: {comment}</p>


      <h1>Country Selector</h1>
      <select onChange={()=>handleCountry(event)}>
        <option value="">Select Country</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Canada">Canada</option>
        <option value="India">India</option> 
      </select>
      <p>Country: {country}</p>
    </>
  )
}

export default App

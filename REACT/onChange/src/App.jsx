import { useState } from "react";


          // onChange  trigger a function every time input changes
          //   work with like input , textarea , select , radio button


function App() {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [payement, setPayement] = useState()
  const [shipping, setShipping] = useState()
  function handleName(event)
  {
    setName(event.target.value);
  }
  function handleComment(event)
  {
    setComment(event.target.value);
  }
  function handlePayement(event)
  {
    setPayement(event.target.value);
  }
  function handleRadio(event)
  {
    setShipping(event.target.value);
  }

  return (
    <>
      <h1>Input</h1>
      <input type="text" value={name} onChange={handleName} />
      <p>Name: {name}</p>

      <h1>Text Area</h1>
      <textarea name="comment" value={comment} id="comment" onChange={handleComment} placeholder="Write comment here!"></textarea>
      <p>Comment: {comment}</p>

      <h1>Selector</h1>
      <p>Payement Option: {payement}</p>
      <select value={payement} onChange={handlePayement} >
        <option value="">Please select option</option>
        <option value="Visa">Visa</option>
        <option value="Payoneer">Payoneer</option>
        <option value="Paypall">Paypall</option>

      </select>



      <h1>Radio button</h1>
      <h2>Shipping: {shipping}</h2>
      <label><input type="radio" value="Pickup" checked={shipping === "Pickup"}  onChange={handleRadio} />
        Pick Up</label>
      <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleRadio} />
        Delivery </label>
    </>
  )
}

export default App

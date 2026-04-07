import { useState } from 'react'
import './App.css'
import { Arrays } from './Arrays'

// update objects in usestate

function App() {
  const [car, setCar] = useState({Model:"Land Cruiser",Company:"Toyota",Year:2010})
  function handleModel(event){
    setCar({...car,Model : event.target.value})
  }
  function handleCompany(event){
    setCar({...car,Company : event.target.value})
  }
  function handleYear(event){
    setCar({...car,Year : event.target.value})
  }

  return (
    <>

        {/* // update objects in usestate */}
      <h1>update objects in usestate</h1>
      <div>
        Car Specification: {car.Model}  {car.Company}  {car.Year}
      </div>

      <div className="inputs">
        <input type="text" value={car.Model} onChange={handleModel} />
        <input type="text" value={car.Company} onChange={handleCompany} />
        <input type="number" value={car.Year} onChange={handleYear} />
      </div>


      {/* update arrays in useState */}
      <h1>update arrays in usestate</h1>
      <Arrays/>
    </>
  )
}

export default App

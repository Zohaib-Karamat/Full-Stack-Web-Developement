import { useState } from 'react'
import './App.css'

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
      <div>
        Car Specification: {car.Model}  {car.Company}  {car.Year}
      </div>

      <div className="inputs">
        <input type="text" value={car.Model} onChange={handleModel} />
        <input type="text" value={car.Company} onChange={handleCompany} />
        <input type="number" value={car.Year} onChange={handleYear} />
      </div>
    </>
  )
}

export default App

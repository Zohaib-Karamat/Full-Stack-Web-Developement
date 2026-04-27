import "./App.css"
import { ColorPicker } from "./ColorPicker"
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  
  
  return (
    <>
      <BrowserRouter>
      <div>
        
        <Link to="/">Home</Link>
        <Link to="/color-picker">Color-Picker</Link>
      </div>
      <Routes>
        <Route path="/" element={<h1>Welcome to Color-Picker App</h1>}/>
        <Route path="/color-picker" element={<ColorPicker/>} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

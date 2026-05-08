import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,BrowserRouter, Route, Link } from "react-router-dom"
import { Home } from './Home'
import { About } from './About'
import { Child } from './Child'
import { User } from './User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <Link to="/"><button>Main</button> </Link>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/child"><button>Child</button></Link>
      
    </nav>
    <Routes>
            <Route path='/' element={<h1>Welcome to React Routing App</h1>} />
            <Route path='/home' element={<Home/> } />
            <Route path='/about' element={<About/> }  />
            <Route path='/child' element={<Child/> } />
            <Route path="/user/:id" element={<User/> } />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

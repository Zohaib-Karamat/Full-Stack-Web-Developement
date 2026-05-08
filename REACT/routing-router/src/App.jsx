import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,BrowserRouter, Route, Link } from "react-router-dom"
import { Home } from './Home'
import { About } from './About'
import { Child } from './Child'

function App() {

  return (
    <>
          {/* // Browser router pori app me routing enable kar deta he to ap ise aik bar define karne ke bad jis marxi component me use kar sakte ho,   ab me ne page.jsx me Browser route define kiyen hen lekin abi me inhe Home component me bi use kar sakta hon. */}

      <BrowserRouter>
      <nav style={{display:"flex", alignItems:"center",justifyContent:"center",gap:10}}>
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
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>


      </BrowserRouter>
      
    </>
  )
}

export default App

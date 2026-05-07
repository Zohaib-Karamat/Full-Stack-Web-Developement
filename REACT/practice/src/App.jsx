import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './Counter'
import Greetings from './Greetings'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DataCard from './DataCard';
import axios from 'axios';
import { NotesList } from './NotesList';

function App() {
  const [data, setdata] = useState([])
  const [data2, setdata2] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/getnotes")
      .then((response) => {
        console.log(response.data)
        setdata(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  useEffect(() => {
    
    fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json")
      .then((response) => {
        return response.json()
      })
      .then((data2) => {
        console.log(data2)
        setdata2(data2)
      })
      .catch((error) => {
        console.log(error)

      })
  }, [])



  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", position: "fixed", top: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>

          <Link to="/"><button>Home</button></Link>
          <Link to="/cardwithcounter"><button>Counter</button></Link>
          <Link to="/greetings"><button>Greetings</button></Link>
          <Link to="/usserslist"><button>Users List</button></Link>
          <Link to="/noteslist"><button>Notes List</button></Link>
        </div>
        <Routes>
          <Route path="/" element={<h1>Welcome to React App</h1>} />
          <Route path="/cardwithcounter" element={<Card title="Card Title" description="This is a description of the card." />} />
          <Route path="/greetings" element={<Greetings isLogIn={true} user="Zohaib" />} />
          <Route
            path="/usserslist"
            element={(
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", paddingTop: "80px" }}>
                {data2.map((item) => (
                  <DataCard key={item.id} name={item.name} language={item.language} bio={item.bio} />
                ))}
              </div>
            )}
          />
          <Route
            path="/noteslist"
            element={(
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", paddingTop: "80px" }}>
                {data.map((item) => (
                  <NotesList key={item._id} title={item.title} description
                    ={item.description
                    } />
                ))}
              </div>
            )}
          />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App

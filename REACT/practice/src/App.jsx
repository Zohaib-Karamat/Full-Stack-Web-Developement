import { useState } from 'react'
import './App.css'
import { Card } from './Counter'
import CardUser from './CardUser'


function App() {
 

  return (
    <>
      <h1>hello world</h1>
      {/* // Counter */}
      <Card title="Card Title" description="This is a description of the card." /> 
      <CardUser name="Card Title" location="This is a description of the card." /> 
      {/* // Card using props  */}
      <CardUser name="Zohaib" location="Lahore" />  
    </>
  )
}

export default App

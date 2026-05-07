import React, { useState } from 'react';
import { createContext , useContext } from 'react';


// The Parent: Holds the state
export const UserContext = createContext();

export default function Context() {
  const [user, setUser] = useState("Alex");



  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1>Level 1: App</h1>
      <p>Source of data: <strong>{user}</strong></p>
      {/* Passing state down to Level 2 */}
      <UserContext.Provider value={user}>
        <SecondComponent />
      </UserContext.Provider>
    </div>
  );
}

// Level 2: Doesn't use the data, just passes it through
function SecondComponent() {
  return (
    <div style={{ border: '2px solid blue', margin: '10px', padding: '10px' }}>
      <h2>Level 2</h2>
      <ThirdComponent />
    </div>
  );
}

// Level 3: Still just a middle-man
function ThirdComponent() {
  return (
    <div style={{ border: '2px solid green', margin: '10px', padding: '10px' }}>
      <h3>Level 3</h3>
      <FourthComponent  />
    </div>
  );
}
    
// Level 4: Finally uses the data
function FourthComponent() {
  const user = useContext(UserContext);
  return (
    <div style={{ border: '2px solid red', margin: '10px', padding: '10px' }}>
      <h4>Level 4: Destination</h4>
      <p>Hello, <strong>{user}</strong>! (Received via context)</p>
    </div>
  );
}
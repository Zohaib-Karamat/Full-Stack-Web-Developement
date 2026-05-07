import React, { useState } from 'react';
import Context from './Context';

// The Parent: Holds the state  
export default function App() {
  const [user, setUser] = useState("Alex");
  const [showContext, setShowContext] = useState(false);

  if (showContext) {
    return <Context />;
  }
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h1>Level 1: App</h1>
      <p>Source of data: <strong>{user}</strong></p>
      {/* Passing state down to Level 2 */}
      <SecondComponent user={user} onShowContext={() => setShowContext(true)} />
    </div>
  );
}

// Level 2: Doesn't use the data, just passes it through
function SecondComponent({ user, onShowContext }) {
  return (
    <div style={{ border: '2px solid blue', margin: '10px', padding: '10px' }}>
      <h2>Level 2</h2>
      <ThirdComponent user={user} onShowContext={onShowContext} />
    </div>
  );
}

// Level 3: Still just a middle-man
function ThirdComponent({ user, onShowContext }) {
  return (
    <div style={{ border: '2px solid green', margin: '10px', padding: '10px' }}>
      <h3>Level 3</h3>
      <FourthComponent user={user} onShowContext={onShowContext} />
    </div>
  );
}

// Level 4: Finally uses the data
function FourthComponent({ user, onShowContext }) {
  return (
    <div style={{ border: '2px solid red', margin: '10px', padding: '10px' }}>
      <h4>Level 4: Destination</h4>
      <p>Hello, <strong>{user}</strong>! (Received via prop drilling)</p>


      <button onClick={onShowContext}>Want to pass data using Context</button>
    </div>  
  );
}
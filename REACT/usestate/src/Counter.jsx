import { useState } from "react";

export function Counter() {
    const [Number, setNumber] = useState(10)
    function increment(){
        if(Number >= 10)
        {
            setNumber(0);
        }
        else if (Number >= 0) {
            setNumber(Number+1)
        }
    }
    function decrement(){
        if(Number <= 0)
        {
            setNumber(0);
        }
        else if (Number <= 10) {
            setNumber(Number-1)
        }
    }

    function reset(){
        setNumber(0);
    }

    return(
        <>  
            <h1>Number: {Number}</h1>
            <div>
                <button onClick={increment}>Add</button>
                <button onClick={decrement}>Subtract</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
    
}

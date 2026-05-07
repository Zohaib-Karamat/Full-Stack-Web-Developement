import { useEffect, useRef, useState } from "react"

export function Previous() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);

    useEffect(()=>{
        prevCountRef.current = count;
        
    },[count])

    return(
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current}</p>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
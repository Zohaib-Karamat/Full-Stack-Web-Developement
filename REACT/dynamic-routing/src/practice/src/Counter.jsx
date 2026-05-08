import { useState } from "react";

export const Card = (props) => {
    const [count, setcount] = useState(0)
    function countPlus() {
        if (count >= 0 && count < 10) {

            setcount(count + 1)
        }
        else {
            setcount(0)
        }
    }


    function countMinus() {
        if (count > 0 && count < 10) {

            setcount(count - 1)
        }
        else {
            setcount(0)
        }
    }

    return (
        <>
            <div className="card">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div>
                    <h2>{count}</h2>
                    <div style={{display:"flex",gap:10, alignItems:"center",justifyContent:"center"}}>
                        <button onClick={countPlus}>Add</button>
                        <button onClick={countMinus}>Cut</button>
                    </div>
                </div>
            </div>
        </>);
}
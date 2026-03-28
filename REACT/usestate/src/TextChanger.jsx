import { useState } from "react";

function TextChanger() {
    const [Text, setText] = useState("Zohaib");
    function textChanger(n) {
        setText(n);
    }
    return(
        <>
            <h1>Name: {Text}</h1> 
            <button onClick={()=>textChanger("Ali")}>Change Name</button>
        </>
    )
}

export default TextChanger
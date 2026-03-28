import { useState } from "react";

function TextChanger() {
    const [Text, setText] = useState("Zohaib");
    function textChanger(n) {
        setText(n);
    }
    return(
        <>
            <h2>Name: {Text}</h2> 
            <button onClick={()=>textChanger("Ali")}>Change Name</button>
        </>
    )
}

export default TextChanger
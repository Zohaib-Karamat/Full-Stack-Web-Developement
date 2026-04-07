import { useState } from "react";

// update arrays in usestate

export function Arrays(){

    let fruits = ["Mango","Banana","Orange","Apple"];
    const [fruit, setfruit] = useState(fruits);
    function handleAddFruit(){
        const newFruit = document.getElementById("fruitName").value;
        document.getElementById("fruitName").value = "";
        setfruit([...fruit,newFruit]);
    }
    function handleRemoveFruit(newindex){
        setfruit(
            fruit.filter((element,previndex)=>previndex!=newindex)

        )
    }

    return(
        <>
            <div className="render">
                <ul>
                    {fruit.map((fruit,index)=>
                                                <li key={index} style={{cursor:"pointer"}}  onClick={()=>handleRemoveFruit(index)}>{fruit}</li>
                    )}
                </ul>
            </div>
            <br />
            <input type="text" placeholder="Enter fruit name here!" id="fruitName" />
            <button onClick={handleAddFruit}>Add Fruit</button>
        </>
    )
}
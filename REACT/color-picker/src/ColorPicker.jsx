import { useState } from "react";

export function ColorPicker(){
    
    const [color, setcolor] = useState("#941919")

    function handleColor(event){
        setcolor(event.target.value)
    }

    return(<>
            <div className="color_container" style={{backgroundColor:color}}>
                Selected Color is : {color}
            </div>
            <br />
            <div>Select a Color</div>
            <input type="color" value={color}  onChange={handleColor} />


    </>);
}
function Button() {
    let count = 0;
    const handleClick = (e) => {
        e.target.textContent = "OUCH";
    }
    const handleClick2 = (name) => {
        count++;
        count<3?console.log(`${name} click me ${count} times`):console.log(`${name} stop clicking me!`)
        
    }
    // for handle click2
    // return(
    //     <button onClick={()=>handleClick2("Zohaib")}>Click me😊</button>
    // );

    //for handleclick 
    return(
        <button onClick={(e)=>{handleClick(e)}}>Click me😊</button>
    )
}
export default Button
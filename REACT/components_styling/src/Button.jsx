

function Button() {
    const styles = {
        padding: "10px 20px",
        fontWeight: "bold",
    fontSize: "x-large",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "crimson",
    color: "white",
    cursor: "pointer",
}

return (
    // inline css
    // <button style={styles}>Click me!</button>     


    <button style={{padding: "10px 20px",
        fontWeight: "bold",
    fontSize: "x-large",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "crimson",
    color: "white",
    cursor: "pointer",}}>Click me!</button>  
)
}


export default Button;
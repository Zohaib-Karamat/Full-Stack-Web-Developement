function List(props
) {
    const fruits = props.fruits;
    fruits.sort((a,b)=>(
        a.cal - b.cal
    ))
   
    const condition = fruits.filter(num=>num.cal<100)
    const items = condition.map(fruit=>
    <li key={fruit.cal}> {fruit.name}: <b>{fruit.cal}</b></li>
    )


    return <><h2>{props.category}</h2>
    <ul>{items}</ul></>;
}

export default List
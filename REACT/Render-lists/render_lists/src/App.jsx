import  List  from "./List"

function App() {
  const fruits = [{name:"Apple",cal:100},{name:"Banana",cal:50},{name:"Dates",cal:90},{name:"Grapes",cal:150},{name:"Orange",cal:105}];
   
  return (<>
    {fruits.length>4?
    <>
    <List fruits={fruits} category = "Fruits"/>
    <List fruits={fruits} category = "Abc"/>
    <List fruits={fruits} category = "|ERFG"/>
    <List fruits={fruits} category = "JIHUY"/>
    <List fruits={fruits} category = "ERYT"/>
    </>:null
    }
    </>
  )
}

export default App

import { useNavigate ,Link} from "react-router-dom";
import { Child } from "./Child";

// Browser router pori app me routing enable kar deta he to ap ise aik bar define karne ke bad jis marxi component me use kar sakte ho,   ab me ne page.jsx me Browser route define kiyen hen lekin abi me inhe Home component me bi use kar sakta hon.

export function Home() {
    const navigate = useNavigate()
    return(
        <>
        <h1>Hello I'm Home Component here</h1>
        <Link to="/child"><button>Child</button></Link>    // Link is use to navigate to another page without refreshing the page by just clicking on the button.
        <button onClick={() => navigate("/child")}>Child</button>   // useNavigate is use to navigate to another page using javascript logic.
        
        
   </> )
}
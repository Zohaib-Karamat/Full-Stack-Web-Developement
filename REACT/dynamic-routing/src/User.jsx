import { useParams } from "react-router-dom"

export function User(params) { 
    const {id} = useParams();
    return(
        <>
            <h1>Hello I'm User Component here: {id}</h1>
        </>
    )
}
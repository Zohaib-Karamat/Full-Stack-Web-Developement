export function Greetings(params) {
    

    return(

        params.isLoggedIn ? <h2>Welcome {params.username}</h2> : <h2>Please Log In to Continue!</h2>
    )
}
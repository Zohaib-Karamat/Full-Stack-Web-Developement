function Greetings(params) {
    return(
        params.isLogIn?<h2>Welcome {params.user} here! </h2> : <h2>Please Login to continue</h2>
    )
}
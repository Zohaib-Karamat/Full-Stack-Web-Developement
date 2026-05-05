function CardUser(params) {
    return(
        <>
            <h1>User name: {params.name}</h1>
            <h2>User Location: {params.location}</h2>
        </>
    );
}

export default CardUser
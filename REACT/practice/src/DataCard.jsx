function DataCard(params) {
    const cardStyle = {
        width: "100%",
        maxWidth: "420px",
        flex: "1 1 280px",
        padding: "16px 20px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #1e293b 0%, #273449 100%)",
        border: "1px solid #334155",
        boxShadow: "0 10px 24px rgba(2, 6, 23, 0.35)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontFamily: '"Montserrat", sans-serif',
    };

    const nameStyle = {
        margin: 0,
        fontSize: "22px",
        fontWeight: 700,
        color: "#f9fafb",
        letterSpacing: "0.2px",
    };

    const languageStyle = {
        margin: 0,
        fontSize: "14px",
        fontWeight: 600,
        color: "#7dd3fc",
        textTransform: "uppercase",
        letterSpacing: "1px",
    };

    const bioStyle = {
        margin: 0,
        fontSize: "14px",
        lineHeight: 1.6,
        color: "#cbd5f5",
    };

    return(
        <>  
            <div style={cardStyle}>
                <h2 style={nameStyle}>{params.name}</h2>
                <h2 style={languageStyle}>{params.language}</h2>
                <p style={bioStyle}>{params.bio}</p>
            </div>
        </>
    )
}

export default DataCard
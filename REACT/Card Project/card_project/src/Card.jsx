import zohaib from "./assets/zohaib2.jpeg";

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={zohaib} alt=""/>
            <h2 className="card-text">Zohaib Karamat</h2>
            <p className="card-para">I do coding and study as a software engineer.</p>
        </div>
    );
}



export default Card;
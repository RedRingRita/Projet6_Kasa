import logements from "../../database/logements.json"
import "./styleCard.css"

function Card(){
    return(
        <div className="containerCards">
            {logements.map((lieu) => (
                <div key={lieu.id} className="card">
                    <img  src={lieu.cover} alt={lieu.title}></img>
                    <div className="cardText">{lieu.title}</div>
                </div>
                    )
                )
            }
        </div>
    )
}

export default Card
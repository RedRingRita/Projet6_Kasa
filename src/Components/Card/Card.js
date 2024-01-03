import logements from "../../database/logements.json"
import "./styleCard.css"
import {Link} from "react-router-dom"

function Card(){
    return(
        <div className="containerCards">
            {logements.map((house) => (
                <div key={house.id} className="card">
                    <Link to={`/housing/${house.id}`}> <img src={house.cover} alt={house.title}></img> </Link>
                    <div className="cardText">{house.title}</div>                        
                </div>
                ))
            }
        </div>
    )
}

export default Card
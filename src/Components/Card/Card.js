import logements from "../../database/logements.json"
import "./styleCard.css"
import {Link} from "react-router-dom"

//Composant Card qui créé un lien sous forme d'image en parcourant le fichier logement.json
function Card(){
    return(
        <div className="containerCards">
            {logements.map((house) => (
                <div key={house.id} className="card">
                    <Link to={`/housing/${house.id}`}> <img src={house.cover} alt={house.title}></img> </Link>
                    <div>{house.title}</div>                        
                </div>
                ))
            }
        </div>
    )
}

export default Card
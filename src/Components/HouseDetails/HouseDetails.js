import Collapse from "../../Components/Collapse/Collapse"
import "./styleHouseDetails.css"

function HouseDetails({house}){

    return(
        <div className="houseDetails">

            <div className="houseDetailsContent">
                <div className="houseDetails__description">
                    <div className="houseDetails__description--name">{house.title}</div>
                    <div className="houseDetails__description--location">{house.location}</div>
                    <ul className="houseDetails__description--tags">
                        <li>Cosy</li>
                        <li>Paris 17e</li>
                    </ul>
                </div>

                <div className="houseDetails__host">
                    <div className="houseDetails__host--name"> {house.host.name}</div>                
                    <img src={house.host.picture} alt={house.title} className="houseDetails__host--picture"></img>
                    <div>rating : {house.rating}</div>
                </div>
            </div>

            <div className="houseDetails__collapse">
                <Collapse title="Description"/>
                <Collapse title="Equipement" />
            </div>
        </div>
    )
}

export default HouseDetails
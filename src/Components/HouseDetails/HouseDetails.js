import Collapse from "../../Components/Collapse/Collapse"
import "./styleHouseDetails.css"
import starInactive from "../../assets/star-inactive.png"
import starActive from "../../assets/star-active.png"

function HouseDetails({house}){

    let redStar = () => {
        const elements = []

        for (let i = 0 ; i < 5 ; i++){
            if (i < house.rating-1){
                elements.push(<img key={i} src={starActive} alt="étoile colorée"></img>)
            }else{
                elements.push(<img key={i} src={starInactive} alt="étoile grise"></img>)
            }
        }
        return <div className="houseDetails__host--rating">{elements}</div>
    }

    return(
        <div className="houseDetails">
            <div className="houseDetailsContent">
                <div className="houseDetails__description">
                    <div className="houseDetails__description--name">{house.title}</div>
                    <div className="houseDetails__description--location">{house.location}</div>
                    <ul>
                        {house.tags.map((item, index) => (
                            <li key={`${item.tags}+${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="houseDetails__host">
                    <div className="houseDetails__host--details">
                        <div> {house.host.name}</div>                
                        <img src={house.host.picture} alt={house.title}></img>
                    </div>
                    {redStar()}             
                </div>
            </div>

            <div className="houseDetails__collapse">
                <div className="houseDetails__collapse--description">
                    <Collapse title="Description" text={house.description}/>
                </div>
                <div className="houseDetails__collapse--equipement">
                    <Collapse title="Equipement" text={house.equipments}/>
                </div>
            </div>
        </div>
    )
}

export default HouseDetails
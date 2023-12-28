import "./styleCollapse.css"
import arrow from "../../assets/fleche.png"

function Collapse({text}){
    return(
        <div className="bar">
            <div>{text}</div>
            <img src={arrow} alt="flèche déroulante"></img>
        </div>
    )
}

export default Collapse
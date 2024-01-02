import "./styleCollapseTest.css"
import arrow from "../../assets/fleche.png"

function Collapse({title, text}){


    return(
        <div className="blockCollapse__redbar">
            <div>{title}</div>
            <img src={arrow} alt="flèche déroulante" className="blockCollapse__btnArrow"></img>
            <div className="blockCollapse__greybg">
                <div className="blockCollapse__text">{text}</div>
            </div>
        </div>
    )
}

export default Collapse
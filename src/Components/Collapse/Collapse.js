import "./styleCollapse.css"
import arrow from "../../assets/fleche.png"
// import { useState } from "react"

function Collapse({title, text}){   
    
    return(
        <div className="blockCollapse">
            <div className="blockCollapse__redbar">
                <div>{title}</div>
            </div>
            <img src={arrow} alt="flèche déroulante" className="blockCollapse__btnArrow"></img>
            <div className="blockCollapse__greybar">{text}</div>
        </div>
    )

    // const [statut, setStatut] = useState("Fermée");
    // const [isOpen, setIsOpen] = useState(false);

    // return(
    //     <div className="blockCollapse">
    //         <div className="blockCollapse__redbar">
    //             <div>{title}</div>
    //             <div>{statut}</div>
    //         </div>
    //             <img onClick={() => {
    //                 if (isOpen === false){
    //                     setIsOpen(true);
    //                     setStatut("Ouvert")
    //                 }
    //                 else {
    //                     setIsOpen(false);
    //                     setStatut("Fermée")
    //                 }

    //                 setIsOpen(!isOpen);
    //                 setStatut(isOpen ? "Ouvert" : "Fermée");
    //                 }
    //             } 
    //             src={arrow} alt="flèche déroulante" className="blockCollapse__btnArrow"></img>
    //             <div className="blockCollapse__greybg">
    //                 <div className="blockCollapse__text">{text}</div>
    //             </div>
    //     </div>
    // )
}

export default Collapse
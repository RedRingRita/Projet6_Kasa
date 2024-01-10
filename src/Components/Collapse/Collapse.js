import "./styleCollapse.css";
import arrow from "../../assets/fleche.png";
import { useState, useRef } from "react";

function Collapse({title, text}){   

    let listerEquipement = (data) => {
        let equipements = []

        if (typeof(data) === "object"){
            Object.values(data).map((item, index) => {
                return equipements.push(<div key={`${index}`}>{item}</div>)
            })            
        }else{
            equipements.push(data)
        }
        return equipements
    }

    const toggle = () => {
        setOpen(!open)
    }
    
    const [open, setOpen] = useState(false)
    const parentRef = useRef()

    return (
        <div className="blockCollapse">
            <div className="blockCollapse__redbar">
                <div>{title}</div>
                <img onClick={toggle} src={arrow} alt="flèche déroulante" className={open ? "blockCollapse__btnArrow--down" : "blockCollapse__btnArrow--up"}></img>
            </div>
            <div 
                className={open ? "blockCollapse__greybar shown" : "blockCollapse__greybar hidden" } 
                ref={parentRef} 
                style ={open ? {height: parentRef.current.scrollHeight + "px"} : {height : "0px"}}>
                <div>{listerEquipement(text)}</div>
            </div>
        </div>
    )
}

export default Collapse
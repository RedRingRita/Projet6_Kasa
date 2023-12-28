import imgHeader from "../../assets/kasaLogo.png"
import {Link} from "react-router-dom"
import "./styleHeader.css"

function Header(){
    return (
        <div className="kasa-header">
            <img src={imgHeader} alt="header de l'appli" ></img>
            <ul>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </ul>
        </div>
    )
}

export default Header
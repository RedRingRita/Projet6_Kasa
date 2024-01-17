import imgHeader from "../../assets/kasaLogo.png"
import {Link} from "react-router-dom"
import "./styleHeader.css"

//Composant Header, on y ajoute les liens aux différentes partie du site grace à router
function Header({homeUnderline, aboutUnderline}){
    return (
        <div className="kasa-header">
            <Link to="/"><img src={imgHeader} alt="header de l'appli" ></img></Link>
            <ul>
                <Link to="/" className={homeUnderline ? "underlined" : "" }>Accueil</Link>
                <Link to="/about" className={aboutUnderline ? "underlined" : "" }>A Propos</Link>
            </ul>
        </div>
    )
}

export default Header
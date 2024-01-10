import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./styleError.css"
import {Link} from "react-router-dom"

function Error(){
    return (
        <div className="content">
            <Header />
            <div className="errorText">
                <div>404</div>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error
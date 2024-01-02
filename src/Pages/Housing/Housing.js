import { Navigate, useParams } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Slideshow from "../../Components/Slideshow/Slideshow"

import logements from "../../database/logements.json"

function Housing(){

    const {houseId} = useParams()
    console.log(houseId)

    const selectedHouse = logements.find((house) => (house.id === houseId));

    if (!selectedHouse) {
        // Gérez le cas où aucune maison n'est trouvée pour l'ID spécifié
        return (
            <Navigate to="/error" />
        );
    }

    return (
        <div className="content">
            <Header />
            <Slideshow img={selectedHouse.cover} alt={selectedHouse.title} numbering={selectedHouse.pictures.length}/>
            <Footer />
        </div>
    )
}

export default Housing
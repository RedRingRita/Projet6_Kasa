import { Navigate, useParams } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Slideshow from "../../Components/Slideshow/Slideshow"
import HouseDetails from "../../Components/HouseDetails/HouseDetails"
import logements from "../../database/logements.json"

function Housing(){

    const {houseId} = useParams()
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
            <Slideshow housePictures={selectedHouse.pictures} houseTitle={selectedHouse.title} />
            <HouseDetails house={selectedHouse}/>
            <Footer />
        </div>
    )
}

export default Housing
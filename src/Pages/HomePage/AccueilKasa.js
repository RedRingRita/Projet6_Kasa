import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Banner from "../../Components/Banner/Banner"
import Card from "../../Components/Card/Card"
import cliff from "../../assets/falaises.jpg"
import "./styleAccueilKasa.css"


function AccueilKasa(){
    return (
        <div className="content">
            <Header />
            <Banner img={cliff} alt={"Falaises"} text={"Chez vous, partout et ailleurs"}/>
            <div className="bgGrey">
                <Card/> 
            </div>
            <Footer />
        </div>
    )
}

export default AccueilKasa
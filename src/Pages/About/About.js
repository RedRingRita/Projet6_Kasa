import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Banner from "../../Components/Banner/Banner"
import Collapse from "../../Components/Collapse/Collapse"
import mountain from "../../assets/montagnes.jpg"

function About(){
    return (
        <div className="content">
            <Header />
            <Banner img={mountain} alt={"Montages"}/>
            <Collapse text="Flabilité"/>
            <Collapse text="Respect"/>
            <Collapse text="Service"/>
            <Collapse text="Sécurité"/>
            <Footer />
        </div>
    )
}
export default About
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Banner from "../../Components/Banner/Banner"
import Collapse from "../../Components/Collapse/Collapse"
import mountain from "../../assets/montagnes.jpg"
import about from "../../database/about.json"
import "./styleAbout.css"

function About(){
    return (
        <div className="content">
            <Header aboutUnderline={true}/>
            <Banner img={mountain} alt={"Montages"}/>
            <section className="content__section">
                <Collapse title="Flabilité" text={about[0]}/>
                <Collapse title="Respect" text={about[1]}/>
                <Collapse title="Service" text={about[2]}/>
                <Collapse title="Sécurité" text={about[3]}/>
            </section>
            <Footer />
        </div>
    )
}
export default About
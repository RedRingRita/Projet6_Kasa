import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Banner from "../../Components/Banner/Banner"
import Collapse from "../../Components/Collapse/Collapse"
import mountain from "../../assets/montagnes.jpg"
import "./styleAbout.css"

function About(){
    return (
        <div className="content">
            <Header />
            <Banner img={mountain} alt={"Montages"}/>
            <section className="content__section">
                <Collapse title="Flabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les Photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                <Collapse title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title="Sécurité" text="La sécurité est la priorité de Kasa. AUssi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérfier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </section>
            <Footer />
        </div>
    )
}
export default About
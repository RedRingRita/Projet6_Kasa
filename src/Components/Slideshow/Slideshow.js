import "./styleSlideshow.css"

import prevArrow from "../../assets/prevArrow.png"
import nextArrow from "../../assets/nextArrow.png"

function Slideshow({img, alt, numbering}){
    return(        
        <div className="caroussel">
            <img src={img} alt={alt} className="caroussel__housingCover"></img>
            <div className="display">
                <img src={prevArrow} alt="bouton précédente" className="caroussel__arrow caroussel__arrow--prev"></img>
                <img src={nextArrow} alt="bouton suivante" className="caroussel__arrow caroussel__arrow-next"></img>
                <div className="numbering">{`1/${numbering}`}</div>
            </div>
        </div>
    )
}

export default Slideshow
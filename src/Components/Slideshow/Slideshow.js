import "./styleSlideshow.css"
import { useState } from "react"
import prevArrow from "../../assets/prevArrow.png"
import nextArrow from "../../assets/nextArrow.png"

function Slideshow({housePictures, houseTitle}){

    let [indexImg, setIndexImg] = useState(0)
    const [actualImage, setActualImage] = useState(housePictures[indexImg])
    
    function imgPrev(){
        if (indexImg === 0){
            setActualImage(housePictures[housePictures.length-1])
            setIndexImg(housePictures.length-1)
        } else{
            setActualImage(housePictures[indexImg-1])
            setIndexImg(indexImg-1)
        }
    }

    function imgNext(){
        if (indexImg === housePictures.length-1){
            setActualImage(housePictures[0])
            setIndexImg(0)
        } else{
            setActualImage(housePictures[indexImg+1])
            setIndexImg(indexImg+1)
        }
    }

    if (housePictures.length > 1){
        return(
            <div className="caroussel">
                <img src={actualImage} alt={houseTitle} className="caroussel__housingCover"></img>                
                <div>
                    <img onClick={(imgPrev)}
                        src={prevArrow} 
                        alt="bouton précédente" 
                        className="caroussel__arrow caroussel__arrow--prev">
                    </img>
    
                    <img onClick={(imgNext)} 
                        src={nextArrow} 
                        alt="bouton suivante" 
                        className="caroussel__arrow caroussel__arrow-next">
                    </img>
                    <div className="numbering">{`${indexImg+1}/${housePictures.length}`}</div>    
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="caroussel">
                <img src={actualImage} alt={houseTitle} className="caroussel__housingCover"></img>    
            </div>
        )
    }
}

export default Slideshow
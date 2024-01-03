import "./styleSlideshow.css"
import { useState } from "react"
import prevArrow from "../../assets/prevArrow.png"
import nextArrow from "../../assets/nextArrow.png"


function Slideshow({house}){

    let [indexImg, setIndexImg] = useState(0)
    const [actualImage, setActualImage] = useState(house.pictures[indexImg])
    
    function imgPrev(){
        if (indexImg === 0){
            setActualImage(house.pictures[house.pictures.length-1])
            setIndexImg(house.pictures.length-1)
        } else{
            setActualImage(house.pictures[indexImg-1])
            setIndexImg(indexImg-1)
        }
    }

    function imgNext(){
        if (indexImg === house.pictures.length-1){
            setActualImage(house.pictures[0])
            setIndexImg(0)
        } else{
            setActualImage(house.pictures[indexImg+1])
            setIndexImg(indexImg+1)
        }
    }

    if (house.pictures.length > 1){
        return(
            <div className="caroussel">
                <img src={actualImage} alt={house.title} className="caroussel__housingCover"></img>
    
                
                <div className="display">
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
                    <div className="numbering">{`${indexImg+1}/${house.pictures.length}`}</div>
    
                </div>
            </div>
        )
    }else {
        return(
            <div className="caroussel">
                <img src={actualImage} alt={house.title} className="caroussel__housingCover"></img>    
            </div>
        )
    }    
}

export default Slideshow
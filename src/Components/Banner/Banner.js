// import cliff from "../../assets/falaises.jpg"
import "./styleBanner.css"

//Composant Banner qui ajoute un texte si on lui en a passé un en props
function Banner({img, alt, text}){
    return(        
        <div className="cliff">        
            <img src={img} alt={alt}></img>
            <div>{text}</div>
        </div>
    )
}

export default Banner
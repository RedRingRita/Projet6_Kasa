// import cliff from "../../assets/falaises.jpg"
import "./styleBanner.css"

function Banner({img, alt, text}){
    return(        
        <div className="cliff">        
            <img src={img} alt={alt}></img>
            <div className="imgText">{text}</div>
        </div>
    )
}

export default Banner
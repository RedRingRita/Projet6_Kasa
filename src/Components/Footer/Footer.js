import logoBlanc from "../../assets/kasaLogoBlanc.png"
import "./styleFooter.css"

function Footer(){
    return (
        <footer className="kasa-footer">
            <img src={logoBlanc} alt="logo Kasa" ></img>
            <div>© 2023 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer
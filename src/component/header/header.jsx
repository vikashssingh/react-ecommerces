import "./header.css"
import logo1 from "../../assets/logo1.png"

export default function Header(){
    return <header>
        <span className="d-none"><img src={`${logo1}`} alt="" /> vikash singh</span>
        <span><img src={`${logo1}`} alt="" /> vikash singh</span>
        <span className="d-none"><img src={`${logo1}`} alt="" /> vikash singh</span>
    </header>
}
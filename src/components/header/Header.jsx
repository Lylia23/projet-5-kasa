import "./header.scss"
import logo from "../../assets/images/LOGO.png"
import {Link} from "react-router-dom";
export function Header() {
    return (
        <div className="header-container">
            <img src={logo} alt="logo-kasa" className="logo"/>
            <nav className="nav-link">
                <Link className="link" to="/">Accueil</Link>
                <Link className="link" to="/a-propos">A Propos</Link>
            </nav>
        </div>

    )
}
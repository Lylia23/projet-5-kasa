import "./header.scss"
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png"
export function Header() {
    return (
        <div className="header-container">
            <img src={logo} alt="logo-kasa" className="logo"/>
            <nav className="nav-link">
                <NavLink
                    className={({isActive}) => {
                        return isActive ? "link active" : "link";
                    }}
                    to="/">Accueil</NavLink>
                <NavLink
                    className={({ isActive}) => {
                        return isActive ? "link active" : "link";
                    }}
                    to="/a-propos">A Propos</NavLink>
            </nav>
        </div>

    )
}
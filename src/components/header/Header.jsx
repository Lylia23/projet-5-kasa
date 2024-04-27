import "./header.scss"
import {Link} from "react-router-dom";
export function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">à propos</Link>
        </nav>
    )
}
import "./notFound.scss";
import notFound from "../../assets/images/404.png"
import {Link} from "react-router-dom";
export function NotFound() {
    return (
        <div className="not-found-container">
            <img src={notFound} alt="Not Found" className="not-found-img" />
            <h1 className="erreur-text">Oups! La page que vous demandez n'existe pas</h1>
            <Link className="return" to="/">Retourner sur la page d’accuei</Link>
        </div>
    )
}
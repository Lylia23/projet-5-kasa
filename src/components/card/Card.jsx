 import "./card.scss"
import {Link} from "react-router-dom";

export function Card({imagePath, title, id}) {

    return (
        <div className="card">
            <Link to={`/logement/${id}`} style={{ textDecoration: 'none' }}>
                <div className="card-img">
                    <img className="card-img" src={imagePath} alt={title}/>
                </div>
                <div className="section-card-title">
                    <h3 className="card-title">{title}</h3>
                </div>
            </Link>
        </div>

    )
}
import "./panel.scss"
import fleche from "../../assets/icon/fleche.svg"
import {useState} from "react";

export function Panel({titre, paragraphe}) {
    const [flecheRotation, setFlecheRotation] = useState(false);
    return (
        <div className="panel">
            <div className="panel-heading">
                <h1 className="titre">{titre}</h1>
                    <img onClick={() => setFlecheRotation(!flecheRotation)}
                     className={flecheRotation ? "fleche fleche-expand" : "fleche"}
                     src={fleche} alt={titre}/>
            </div>
            <div className={flecheRotation ? "paragraphe paragraphe-expand" : "paragraphe"}>
                <p>{paragraphe}</p>
            </div>
        </div>
    )
}

import "./carrousel.scss"
import {useState} from "react";
import fleche_gauche from "../../assets/icon/fleche_gauche.svg"
import fleche_droite from "../../assets/icon/fleche_droite.svg"

export function Carrousel({images}) {
    const [carrousel, setCarrousel] = useState(0);
    const tailleTableau = images.length;
    const isTailleNotValid = tailleTableau < 2;
    return (
        <div className="carrousel-container">
            <img src={images.at(carrousel)} alt="carrousel" className="carrousel-img"/>

            <div className={isTailleNotValid ? "carrousel-fleche-container hide" : "carrousel-fleche-container"}>
                <img src={fleche_gauche}
                     onClick={() => setCarrousel(carrousel - 1 < 0 ? images.length - 1 : carrousel - 1)}
                     alt="carrousel fleche gauche" className="carrousel-fleche"/>

                <img src={fleche_droite}
                     onClick={() => setCarrousel(carrousel + 1 >= images.length ? 0 : carrousel + 1)}
                     alt="carrousel fleche droite" className="carrousel-fleche"/>
            </div>
            <div className={isTailleNotValid ? "carrousel-index hide" : "carrousel-index"}>
                <span>{carrousel + 1}/{tailleTableau}</span>
            </div>
        </div>
    )
}

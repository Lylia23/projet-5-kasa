import "./accueil.scss"
import image from "../../assets/images/p-accueil.png";
import {PresentationAccueil} from "../../components/presentation-accueil/PresentationAccueil";
import {Card} from "../../components/card/Card";

export function Accueil({logements}) {

    return (
        <div>
            <PresentationAccueil imgPath={image} text="Chez vous, partout et ailleurs"/>
            <div className="card-container">
                {logements.map((logement, index) =>
                    <Card key={index} imagePath={logement.cover} title={logement.title} id={logement.id}/>
                )}
            </div>
        </div>
    )
}
import "./aPropos.scss";
import image from "../../assets/images/p-a-propos.png"
import {PresentationAccueil} from "../../components/presentation-accueil/PresentationAccueil";
export function APropos() {

    return (
        <div>
           <PresentationAccueil imgPath={image}/>
        </div>
    )
}
import "./aPropos.scss";
import image from "../../assets/images/p-a-propos.png"
import {PresentationAccueil} from "../../components/presentation-accueil/PresentationAccueil";
import {Panel} from "../../components/panel/Panel";
import {getAPropos} from "../../services/back-end-service";

export function APropos() {
    const datas = getAPropos();
    return (
        <div>
            <PresentationAccueil imgPath={image}/>
            {datas.map((data, index) =>
                <Panel key={index} titre={data.title} paragraphe={data.content}/>
            )}
        </div>
    )
}
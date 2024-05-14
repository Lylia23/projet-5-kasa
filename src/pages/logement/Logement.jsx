import "./logement.scss"
import {useParams} from "react-router-dom";
import {Carrousel} from "../../components/carrousel/Carrousel";
import {getLogementById} from "../../services/back-end-service";
import {NotFound} from "../erreur/NotFound";
import {InformationLogement} from "../../components/information-logement/InformationLogement";
import {Panel} from "../../components/panel/Panel";
import {Host} from "../../components/host/Host";

export function Logement() {
    const {id} = useParams();
    const logement = getLogementById(id);
    return (
        <div>
            {
                logement ?
                    <div>
                        <Carrousel images={logement.pictures}/>
                        <div className="info-logement-container">
                            <div className="info">
                                <InformationLogement titre={logement.title} position={logement.location}
                                                     tags={logement.tags}/>
                            </div>
                            <div className="info">
                                <Host nom={logement.host.name} imageProfil={logement.host.picture}
                                      rating={logement.rating}/>
                            </div>
                        </div>
                        <div className="description-equipement">
                            <div className="info">
                                <Panel titre="Description" paragraphe={logement.description}/>
                            </div>
                            <div className="info">
                                <Panel titre="Equipements" paragraphe={logement.equipments} isTableau={true}/>
                            </div>
                        </div>
                    </div> :
                    <NotFound/>
            }
        </div>
    )
}
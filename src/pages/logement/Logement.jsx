import "./logement.scss"
import {useParams} from "react-router-dom";
import {Carrousel} from "../../components/carrousel/Carrousel";
import {getLogementById} from "../../services/back-end-service";
import {NotFound} from "../erreur/NotFound";
import {InformationLogement} from "../../components/information-logement/InformationLogement";
export function Logement() {
    const { id } = useParams();
    const logement = getLogementById(id);
    return (
        <div>
            {
                logement ?
                    <div>
                        <Carrousel images={logement.pictures}/>
                        <div className="info-logement-container">
                            <div className="info">
                                <InformationLogement titre={logement.title} description={logement.description} position={logement.location} tags={logement.tags} />
                            </div>
                            <div className="info">

                            </div>
                        </div>
                    </div> :
                    <NotFound />
            }
        </div>
    )
}
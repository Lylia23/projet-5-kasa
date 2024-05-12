import "./logement.scss"
import {useParams} from "react-router-dom";
import {Carrousel} from "../../components/carrousel/Carrousel";
import {getLogementById} from "../../services/back-end-service";
import {NotFound} from "../erreur/NotFound";
export function Logement() {
    const { id } = useParams();
    const logement = getLogementById(id);
    return (
        <div>
            {
                logement ?
                    <div>
                        <Carrousel images={logement.pictures}/>
                    </div> :
                    <NotFound />
            }
        </div>
    )
}
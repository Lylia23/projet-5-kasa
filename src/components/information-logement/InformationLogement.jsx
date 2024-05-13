import "./information-logement.scss";
import {Panel} from "../panel/Panel";

export function InformationLogement({titre, position, tags, description}) {
    return (
        <div className="information-logement">
            <div>
                <h1 className="information-titre">{titre}</h1>
                <p className="information-position">{position}</p>
            </div>

            <div className="information-tags">
                {tags.map((tag, index) => (<div className="information-tag" key={index}>
                    <p>{tag}</p>
                </div>))}
            </div>
            <Panel titre="Description" paragraphe={description}/>
        </div>
    )
}
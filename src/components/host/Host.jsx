import "./host.scss";
import starActive from "../../assets/icon/star-active.svg";
import starInactive from "../../assets/icon/star-inactive.svg";

export function Host({nom, imageProfil, rating}) {
    const ratingNumber= Number(rating);
    const itemsToRender = [];

    for (let i = 0; i < 5; i++) {
        if (i < ratingNumber) {
            itemsToRender.push(<img className="star-rating" key={i + '-star'} src={starActive} alt="star active" />);
        } else {
            itemsToRender.push(<img className="star-rating" key={i + '-star'} src={starInactive} alt="star inactive"/>);
        }
    }
    return (
        <div className="host-container">
            <div className="profil">
               <span>
                {nom}
               </span>
                <div className="profil-photo">
                    <img src={imageProfil} alt="profil image"/>
                </div>
            </div>
            <div className="rating">
                {itemsToRender}
            </div>
        </div>
    )
}
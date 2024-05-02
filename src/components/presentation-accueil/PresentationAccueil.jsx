import "./presentationAccueil.scss";
export function PresentationAccueil({imgPath, text}) {
    return (
        <div className="presentation">
            <img src={imgPath} alt="Presentation Accueil" className="presentation-accueil"/>
            <div className={text && text.length > 0 ? 'presentation-accueil-text' : 'hide'}>
                <h1 className="text">{text}</h1>
            </div>
        </div>
    )
}
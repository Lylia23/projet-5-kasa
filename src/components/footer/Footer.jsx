import logoFooter from '../../assets/images/logo-footer.png';
import "./footer.scss"
export function Footer() {
    return (
        <footer className="logoFooter">
            <img src={logoFooter} alt={"footer logo"} className="logoImage"/>
            <p className="texte">{"© 2020 Kasa. All rights reserved"}</p>
        </footer>
    )
}
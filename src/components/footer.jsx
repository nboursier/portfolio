// import * as React from 'react';
// import { Link } from "react-router-dom"
// mettre navicons footer , pour git & linkedin qd meme
import Logo from '../components/logo';
import FooterIcons from '../components/footericons';
import { useContext} from 'react';

import FooterTranslations from '../translation/FooterTranslations.jsx';
import '../scss/layout/_footer.scss';
import '../scss/style.scss';
import  { LanguageContext } from '../context/Languagecontext.jsx';

function Footer() {

    const { language } = useContext(LanguageContext);
    const translations = FooterTranslations[language];

    return (
        <nav className="footer">
            <div className="footer-items">
                <FooterIcons />
                <Logo className="footer-items-logo" imageClassName="footer-items-logo-image" />
                <p className="footer-items-text"> <span className="footer-items-text-span"> © </span> {translations.footertext || "Nicolas Boursier - Tous droits réservés - 2024."}</p>
            </div>
        </nav>
    );
}

export default Footer;
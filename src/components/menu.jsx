import { useContext, useState, useEffect } from 'react';

import MenuTranslations from '../translation/MenuTranslations';
import '../scss/style.scss';
import  { LanguageContext } from '../context/Languagecontext';
import { NavLink } from 'react-router-dom';

const setHash = (hash) => {
    window.document.location.hash = hash;
}

function Menu() {
    const { language } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1023); // par exemple, pour une taille jusqu'à 1023px
    
    const translations = MenuTranslations[language];

    const handleClick = (hash) => {
        setHash(hash);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 1023); // mise à jour de l'état en fonction de la taille de l'écran
        };

        window.addEventListener('resize', handleResize); // écouteur d'événement pour le redimensionnement de la fenêtre
        return () => {
            window.removeEventListener('resize', handleResize); // nettoyage de l'écouteur d'événement lors du démontage du composant
        };
    }, []);

    return (
        <div>
            {isMobileOrTablet ? (
                <button className="menu-button" onClick={toggleMenu}>☰</button>
            ) : (
                <ul className="main-nav-anchor">
                    <li>
                        <a href="#about" onClick={() => handleClick("#about")}>{translations.about || "À propos" }</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={() => handleClick("#skills")}>{translations.skills || "Compétences"}</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => handleClick("#projects")}>{translations.projects || "Projets"}</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handleClick("#contact")}>{translations.contact || "Contact"}</a>
                    </li>
                </ul>
            )}
            {isOpen && (
                <div className="modal">
                    <button className="close-button" onClick={toggleMenu}>X</button>
                    <ul className="main-nav-anchor-opened">
                        <li>
                            <a href="#about" onClick={() => handleClick("#about")}>{translations.about || "À propos"}</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={() => handleClick("#skills")}>{translations.skills || "Compétences"}</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => handleClick("#projects")}>{translations.projects || "Projets"}</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => handleClick("#contact")}>{translations.contact || "Contact"}</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Menu;
// import React from 'react'; 
// import { Link } from "react-router-dom"
import { useContext } from 'react';

import AboutTranslations from '../translation/AboutTranslations';

import Toulouse from '../assets/about/toulouse.jpg';
import Diplome from '../assets/about/Diplome.jpg';
import Loisir from '../assets/about/loisir.jpg';
import Coding from '../assets/about/coding.jpg';

import '../scss/components/_about.scss'
import '../scss/style.scss'
import { LanguageContext } from '../context/Languagecontext';

function About() {
    const { language } = useContext(LanguageContext);

    const translations = AboutTranslations[language];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-container-title">
                    <h2 className="about-title-text">{translations.title || "À propos"}</h2>
                </div>

                <div className="about-list-container">
                    <ul className="hobbies-list">
                        <li className="hobbies-list-item">
                            <img src={Toulouse} className="hobbies-list-item-picture"
                            alt={translations.ToulouseAlt || "Photo de Toulouse, Pont neuf."}
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.locationTitle || "Emplacement"}</h3>
                            <p className="hobbies-list-item-content">{translations.locationContent || "Je suis située en banlieue Toulousaine."}</p>
                        </li>
                        <li className="hobbies-list-item">
                            <img src={Coding} className="hobbies-list-item-picture"
                            alt={translations.codingAlt || "Photo d'un ordinateur avec du code sur l'écran, et un carnet ouvert."}
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.experienceTitle || "Expérience"}</h3>
                            
                            <ul className="hobbies-list-item-content">
                                {translations.experienceContent.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                        <li className="hobbies-list-item">
                            <img src={Diplome} className="hobbies-list-item-picture"
                            alt={translations.diplomaAlt || "Photo de chapeaux de diplômés lancés dans les airs."}
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.diplomaTitle || "Diplômes"}</h3>
                            <ul className="hobbies-list-item-content">
                                {translations.diplomaContent.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                        <li className="hobbies-list-item">
                            <img src={Loisir} className="hobbies-list-item-picture"
                            alt={translations.videoGamesAlt || "Hyeres."} 
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.passionsTitle || "Passions"}</h3>
                            <p className="hobbies-list-item-content">{translations.passionsContent || "Intérêt particulier pour la pop culture, la musique (les concerts), la photographie, et les jeux vidéos."}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
// import { Link } from 'react-router-dom';
import { useContext } from 'react';

import profileIcon from '../assets/profile_icon.webp';
import mailIcon from '../assets/email_icon.webp';
import phoneIcon from '../assets/phone_icon.webp';
import ContactTranslations from '../translation/ContactTranslations';
import '../scss/components/_contact.scss';
import '../scss/style.scss';
import  { LanguageContext } from '../context/Languagecontext';

function Contact() {

    const { language } = useContext(LanguageContext);
    const translations = ContactTranslations[language];

    return (
        <div id="contact">
            <h2 className="contact-title">{translations.title || "Contact"}</h2>
            <div className="form_infos-container">

                <section className="contact_form">
                    <div className="contact_form-content">
                        <form className="contact_form-content-container" data-netlify="true" method="POST">

                            <input type="hidden" name="form-name" value="contact" />

                            <div className="contact_form-content-container-input">
                                <label htmlFor="name"> {translations.labelname || "Nom:"}</label>
                                <input type="text" name="name" id="name" placeholder={translations.namePlaceholder || "Nom"} required=""  autoComplete="name"/>
                            </div>

                            <div className="contact_form-content-container-input">
                                <label htmlFor="email"> {translations.labelemail || "Email:"}</label>
                                <input type="email" name="email" id="email" placeholder={translations.emailPlaceholder || "Email"} required="" autoComplete="email" />
                            </div>

                            <div className="contact_form-content-container-input">
                                <label htmlFor="subject">  {translations.labelsubject || "Sujet:"}</label>
                                <input type="text" name="subject" id="subject" placeholder={translations.subjectPlaceholder || "Sujet"} required="" />
                            </div>

                            <div className="contact_form-content-container-input text">
                                <label htmlFor="message"> {translations.labelmessage || "Message:"}</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder={translations.messagePlaceholder || "Votre message ..."} required=""></textarea>
                            </div>
                            
                            <input className="contact_form-content-container-button" type="submit" value={translations.sendButton || "Envoyer"} />
                        </form>
                    </div>
                </section>

                <div className="contact-infos">
                    <div className="contact-infos-name">
                        <img src={profileIcon} className="contact-infos-icon" alt={translations.userIconAlt || "icon user person"} />
                        <p className="contact-infos-text"> Nicolas Boursier </p>
                    </div>
                    <div className="contact-infos-number">
                        <img src={phoneIcon} className="contact-infos-icon" alt={translations.phoneIconAlt || "icon phone"} />
                        <a href="tel:+33649314974" aria-label="Lien vers le numéro de téléphone" className="contact-infos-text">+336 81 87 96 11</a>
                    </div>
                    <div className="contact-infos-mail">
                        <img src={mailIcon} className="contact-infos-icon" alt={translations.mailIconAlt || "icon mail"} />
                        <a href="mailto:nicolasboursier@yahoo.fr" aria-label="Lien vers l'adresse e-mail" className="contact-infos-text">nicolasboursier@yahoo.fr</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
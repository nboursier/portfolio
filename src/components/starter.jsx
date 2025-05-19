import { useContext } from 'react';
import PropTypes from 'prop-types';
import photoDev from '../assets/photo_pro.jpg';

import cvFile from '../assets/maole_axelle-cv_2025.pdf';
import bookFile from '../assets/maole_axelle-book-compressed.pdf';
import downloadIcon from '../assets/download_icon.webp';

import StarterTranslations from '../translation/StarterTranslation';
import '../scss/components/_starter.scss'
import '../scss/style.scss'
import { LanguageContext } from '../context/Languagecontext';

function Starter() {
    const { language } = useContext(LanguageContext);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'nicolasboursier-cv.pdf'; // nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadBook = () => {
        const link = document.createElement('a');
        link.href = bookFile;
        link.download = 'maolé_axelle-book.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="starter">
            <div className="about-me-container">
                <div>
                    <img
                        src={photoDev}
                        
                        alt={StarterTranslations[language].starter_portrait_alt}
                        loading="eager"
                        className='photo-dev'
                        width="215px" height="auto"
                    />
                </div>

                <div className="about-me">
                    
                    <h2 className="about-me-name"> Nicolas Boursier</h2>
                    <p className="about-me-content">{StarterTranslations[language].starter_role || "Développeur Front-end - Intégrateur Web"}</p>

                    <div className="about-me-buttons">
                        <button className="about-me-button" onClick={handleDownload}>
                            <img src={downloadIcon} alt={StarterTranslations[language].starter_download_alt || "Télécharger" } className="about-me-button-download_icon" />
                            {StarterTranslations[language].starter_cv_button}
                        </button>

                        <button className="about-me-button" onClick={handleDownloadBook}>
                            <img src={downloadIcon} alt={StarterTranslations[language].starter_download_alt || "Télécharger"} className="about-me-button-download_icon" />
                            {StarterTranslations[language].starter_book_button || "BOOK"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Starter;

Starter.propTypes = {
    language: PropTypes.string,
};

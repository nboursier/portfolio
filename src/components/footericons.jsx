// import React from 'react';
import PropTypes from 'prop-types';
import githubLogo from '../assets/github_logo.webp';
import linkedinLogo from '../assets/linkedin_logo.webp';
// import '../scss/layout/_footer.scss'
import '../scss/style.scss';

function FooterIcons() {
    return (
        <section className="footer-items">

            <div className="footer-icons-container">
                <a target="_blank" href="https://github.com/nboursier/" aria-label="Lien Github">
                    <img src={githubLogo} alt="logo de Github" className="footer-items-icon" loading="lazy"/>
                </a>
                
            </div>
        </section>
    );
}

export default FooterIcons;

FooterIcons.propTypes = {
    className: PropTypes.string,
    imageClassName: PropTypes.string,
};
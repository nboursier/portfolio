// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

import '../scss/style.scss';

function Logo({ className }) {
    return (
        <Link to="/portfolio/" className={`main-nav-logo ${className}`}>
            <div className="main-nav-logo-titre">
                <h1 >Nicolas Boursier</h1>
                <h2 >Intégrateur Web </h2>
            </div>
        </Link>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
    imageClassName: PropTypes.string
};

export default Logo;
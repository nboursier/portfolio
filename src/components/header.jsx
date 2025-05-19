// import * as React from 'react';
// import { Link } from "react-router-dom"
import Logo from '../components/logo';
import Menu from '../components/menu';
import NavIcons from '../components/navIcons';
import '../scss/layout/_header.scss';
import '../scss/style.scss';

function Header() {
    return (
        <nav className="main-nav">
        <Logo />
        <Menu />
        <NavIcons />
        </nav>

    );
}

export default Header;



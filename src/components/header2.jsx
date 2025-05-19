import Logo from '../components/logo';

import NavIcons from '../components/navIcons';
import '../scss/layout/_header.scss';
import '../scss/style.scss';

function Header2() {
    return (
        <nav className="main-nav">
        <Logo />
        <NavIcons />
        
        </nav>

    );
}

export default Header2;



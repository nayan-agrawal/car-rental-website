import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/services"}>Services </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/about-us"}>About Us </Link>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar__list">
                    <Link to="/">Home</Link>
                    <Link to="/dove-siamo">Dove Siamo</Link>
                    <Link>Contatti</Link>
                    <Link>Calendario Regate 2020</Link>
                    <Link>Classifiche</Link>
                    <Link>Mercatino</Link>
                    <Link>Photo Gallery</Link>
                    <Link>Video</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

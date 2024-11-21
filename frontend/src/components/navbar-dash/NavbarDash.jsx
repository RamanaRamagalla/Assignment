import React from 'react';
import './NavbarDash.css';
import { logo, profile_image } from '../../assets/assets.js';

const NavbarDash = () => {
    return (
        <nav className="navbar-dash">
            <div className="navbar-logo">
                <img src={logo} alt="Nolan Logo" />
                <span>NOLAN</span>
            </div>
            <div className="navbar-items">
                <span>Upgrade your plan</span>
                <button className="start-project-btn">Start new project</button>
                <div className="navbar-profile">
                    <img src={profile_image} alt="User Avatar" />
                </div>
            </div>
        </nav>
    );
};

export default NavbarDash;

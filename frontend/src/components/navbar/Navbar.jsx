import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logo } from '../../assets/assets.js';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <Link to={'/'} >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="#">Pricing</Link></li>
                    <li><Link to="#">Features</Link></li>
                    <li><Link to={'/login'}>New Project</Link></li>
                    <li>Blog</li>
                </ul>
                <Link to={'/login'}>
                    <div className="btn">Log in</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;

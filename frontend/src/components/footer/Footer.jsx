import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord, FaLink } from 'react-icons/fa';
import { logo } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Nolan Logo" />
                    <span>NOLAN</span>
                </div>
                <div className="footer-links">
                    <a href="#testimonials">Testimonials</a>
                    <a href="#privacy-policy">Privacy Policy</a>
                    <a href="#terms-of-service">Terms of Service</a>
                    <a href="#referral-program">Referral Program</a>
                    <a href="#releases">Releases</a>
                    <a href="#faq">FAQ</a>
                </div>
                <div className="footer-social-icons">
                    <FaInstagram className="social-icon" />
                    <FaTwitter className="social-icon" />
                    <FaYoutube className="social-icon" />
                    <FaLink className="social-icon" />
                    <FaDiscord className="social-icon" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>© NolanAI, Inc. 2024</p>
            </div>
        </footer>
    );
};

export default Footer;

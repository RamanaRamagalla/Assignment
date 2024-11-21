import React from 'react';
import './HeroSection.css';
import { logo } from '../../assets/assets.js'

function HeroSection() {
    return (
        <section className="hero-section">
            <h1>NolanAI: Up your Game with NolanAI</h1>
            <p>NolanAI is an AI-powered video editor that helps you create professional-quality videos in minutes.</p>
            <img src={logo} alt="Hero Image" />
        </section>
    );
}

export default HeroSection;
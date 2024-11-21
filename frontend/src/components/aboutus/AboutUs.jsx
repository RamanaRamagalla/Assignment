import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <header className="about-us-header">
                <h1>ABOUT US</h1>
                <h2>
                    industry's <span className="highlight">largest</span> <br />
                    end-to-end pre-production <span className="highlight">AI suite</span>
                </h2>
            </header>

            <section className="about-us-mission">
                <h3>Our mission</h3>
                <p>
                    Our mission is to empower filmmakers at every stage of pre-production with advanced AI-driven tools, enhancing creativity and efficiency while maintaining your unique vision.
                </p>
                <p>
                    <span className="highlight">NolanAI is here to help, not to take over...</span>
                </p>
            </section>

            <section className="about-us-core-values">
                <h3>Core Values and Vision:</h3>
                <ol>
                    <li><b>Leading the Charge in Ethical AI:</b> NolanAI collaborates with users, ensuring AI serves as a co-creator rather than a replacement.</li>
                    <li><b>Empowering Creatives:</b> AI-powered tools enhance, not eliminate, the role of creatives.</li>
                    <li><b>Comprehensive Solutions:</b> End-to-end platform covering budgeting, sales, and production.</li>
                    <li><b>Future Expansion:</b> Expanding offerings to post-production, sales, and distribution.</li>
                    <li><b>Empowering Creatives with Control:</b> Helping filmmakers retain rights and control over their creations.</li>
                    <li><b>Streamlining Processes:</b> Creating a transparent and efficient system for all stakeholders.</li>
                    <li><b>Cost-Effective Content Creation:</b> Minimizing costs while bringing visions to life.</li>
                </ol>
            </section>

            <section className="about-us-tools">
                <h3>What We Offer: NolanAI offers several groundbreaking tools for filmmakers:</h3>
                <ul>
                    <li>Screenwriting Tools</li>
                    <li>Storyboarding</li>
                    <li>Script Breakdown & Scheduling</li>
                    <li>Budgeting Tools</li>
                    <li>Pitch Deck Creation</li>
                    <li>Collaboration Features</li>
                    <li>Analytics</li>
                    <li>Script Coverage</li>
                    <li>Plot Hole Detection</li>
                    <li>Support</li>
                </ul>
            </section>

            <footer className="about-us-contact">
                <p>Drop us an email: <a href="mailto:hello@nolanai.app">hello@nolanai.app</a></p>
                <p>For support: <a href="mailto:support@nolanai.app">support@nolanai.app</a></p>
            </footer>
        </div>
    );
};

export default AboutUs;

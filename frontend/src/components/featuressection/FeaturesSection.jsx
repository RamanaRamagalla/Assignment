import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
    const features = [
        {
            title: 'AI-Powered Editing',
            description: 'Leverage the power of artificial intelligence to enhance your videos with ease.',
            icon: '🎥',
        },
        {
            title: 'Real-Time Collaboration',
            description: 'Collaborate with your team in real-time, no matter where you are.',
            icon: '🤝',
        },
        {
            title: 'Cloud Storage',
            description: 'Store and access your media from anywhere with secure cloud storage.',
            icon: '☁️',
        },
    ];

    return (
        <section className="features-section" id="features">
            <h2>Our Features</h2>
            <div className="features-container">
                {features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;

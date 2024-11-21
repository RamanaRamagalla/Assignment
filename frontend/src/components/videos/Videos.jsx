import React from 'react';
import './Videos.css';

function Videos() {
    return (
        <section className="video-section">
            <h2>NolanAI in Action</h2>
            <video controls>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>See how NolanAI can help you create amazing videos.</p>
        </section>
    );
}

export default Videos;
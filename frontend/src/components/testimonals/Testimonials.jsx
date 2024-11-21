import React from 'react';
import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        {
            name: 'John Doe',
            testimonial: 'NolanAI is an amazing tool that has helped me save time and money on my video projects.',
        },
        {
            name: 'Jane Smith',
            testimonial: 'I love how easy it is to use NolanAI to create professional-looking videos.',
        },
    ];

    return (
        <section className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <p>{testimonial.testimonial}</p>
                        <p>- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
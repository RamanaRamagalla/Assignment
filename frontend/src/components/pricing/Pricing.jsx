import React from 'react';
import './Pricing.css';

function Pricing() {
    const pricingPlans = [
        {
            title: 'Free Plan',
            price: 'Free',
            features: ['Basic video editing', 'Limited features'],
        },
        {
            title: 'Pro Plan',
            price: '$9.99/month',
            features: ['Advanced video editing', 'Unlimited features'],
        },
    ];

    return (
        <section className="pricing-section" id="pricing">
            <h2>Pricing</h2>
            <div className="pricing-plans">
                {pricingPlans.map((plan, index) => (
                    <div className="pricing-plan" key={index}>
                        <h3>{plan.title}</h3>
                        <p>{plan.price}</p>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button>Sign Up</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;

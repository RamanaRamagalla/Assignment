import React from 'react';
import HeroSection from '../../components/herosection/HeroSection';
import FeaturesSection from '../../components/featuressection/FeaturesSection';
import Videos from '../../components/videos/Videos';
import Testimonials from '../../components/testimonals/Testimonials';
import Pricing from '../../components/pricing/Pricing';
import CallToAction from '../../components/calltoaction/CallToAction';

function Home() {
    return (
        <div>
            <HeroSection />
            <div id="features">
                <FeaturesSection />
            </div>
            <Videos />
            <Testimonials />
            <div id="pricing">
                <Pricing />
            </div>
            <CallToAction />
        </div>
    );
}

export default Home;

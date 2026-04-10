import React from 'react';
import Hero from '../components/home/Hero';
import MarqueeSection from '../components/home/MarqueeSection';
import Services from '../components/home/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <MarqueeSection />
            <Services />
        </div>
    );
};

export default Home;
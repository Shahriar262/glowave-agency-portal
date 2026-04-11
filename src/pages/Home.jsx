import React from 'react';
import Hero from '../components/home/Hero';
import MarqueeSection from '../components/home/MarqueeSection';
import Services from '../components/home/Services';
import ProjectSlider from '../components/home/ImageSlider';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <MarqueeSection />
            <Services />
            <ProjectSlider />
            <AboutSection />
        </div>
    );
};

export default Home;
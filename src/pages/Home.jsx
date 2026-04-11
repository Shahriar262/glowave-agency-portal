import React from 'react';
import Hero from '../components/home/Hero';
import MarqueeSection from '../components/home/MarqueeSection';
import Services from '../components/home/Services';
import ImageSlider from '../components/home/ImageSlider';
import AboutSection from '../components/home/AboutSection';
import Features from '../components/home/Features';
import OurProcess from '../components/home/OurProcess';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    return (
        <div>
            <Hero />
            <MarqueeSection />
            <Services />
            <ImageSlider />
            <AboutSection />
            <Features />
            <OurProcess />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Newsletter />
        </div>
    );
};

export default Home;
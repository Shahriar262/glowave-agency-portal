import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import visual1 from '../../assets/visual-1.avif';
import visual2 from '../../assets/visual-2.avif';
import visual3 from '../../assets/visual-3.avif';
import visual4 from '../../assets/visual-4.avif';
import visual5 from '../../assets/visual-5.avif';
import visual6 from '../../assets/visual-6.avif';
import visual7 from '../../assets/visual-7.avif';

const ImageSlider = () => {
  const images = [visual1, visual2, visual3, visual4, visual5, visual6, visual7];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-23 md:-mt-7 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
            Immersive <span className="text-brand-blue">3D Visuals</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            A curated reel of 3D studies, product shots, and atmospheric scenes in progress.
          </p>
          
          <div className="hidden lg:flex gap-4">
            <button className="nav-prev w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="nav-next w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </motion.div>

        {/* Slider Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col items-center w-full"
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.nav-next',
              prevEl: '.nav-prev',
            }}
            modules={[EffectCards, Autoplay, Navigation]}
            className="visual-cards-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="rounded-[2.5rem] overflow-hidden bg-slate-50">
                <img
                  src={img}
                  alt="3D Study"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden gap-6 mt-10">
            <button className="nav-prev w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center active:scale-90 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="nav-next w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center active:scale-90 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .visual-cards-swiper {
          width: 280px;
          height: 380px;
          overflow: visible !important;
        }

        @media (min-width: 768px) {
          .visual-cards-swiper {
            width: 380px;
            height: 500px;
          }
        }

        .visual-cards-swiper .swiper-button-next,
        .visual-cards-swiper .swiper-button-prev {
          display: none !important;
        }

        .visual-cards-swiper .swiper-slide {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
};

export default ImageSlider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "Lead Frontend Engineer",
    content:
      "The React architecture they built is incredibly scalable. Our page load speed improved by 40% after the migration.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Elena Rodriguez",
    role: "Technical Product Manager",
    content:
      "Most teams struggle with design nuance, but they nailed the Framer Motion interactions perfectly.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Julian Voss",
    role: "CTO @ Voss Media",
    content:
      "Zero friction. They handled our API integrations with surgical precision and met every single deadline.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    content:
      "Technical SEO was a huge priority for us. The site structure they delivered is perfect for our ranking strategy.",
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "David Miller",
    role: "Operations Director",
    content:
      "Clean code and predictable delivery. It's rare to find this level of consistency in modern development.",
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    name: "Amara Okoro",
    role: "Senior UX Researcher",
    content:
      "Our conversion rate jumped significantly after the redesign. The UI feels premium and truly intuitive.",
    avatar: "https://i.pravatar.cc/150?u=6",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            className="text-4xl text-center md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Global feedback by <span className="text-brand-blue">Experts</span>
          </motion.h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          autoHeight={false}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20 cursor-pointer active:cursor-pointer"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="h-full p-10 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col transition-all duration-300 shadow-md hover:border-blue-400 active:border-blue-400  hover:shadow-slate-200/50 group">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                    <Quote
                      size={20}
                      className="text-blue-600 group-hover:text-white"
                    />
                  </div>

                  <p className="text-xl text-slate-700 leading-relaxed font-medium italic mb-10">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200/50">
                  <img
                    src={item.avatar}
                    alt=""
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      {item.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .swiper-pagination-bullet-active {
            background: #2563eb !important;
            width: 30px !important;
            border-radius: 10px !important;
          }

          .swiper-wrapper {
            display: flex;
          }
        `,
        }}
      />
    </section>
  );
};

export default Testimonials;

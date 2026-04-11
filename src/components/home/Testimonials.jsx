import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import avt1 from "../../assets/avt1.jpg";
import avt2 from "../../assets/avt2.jpg";
import avt3 from "../../assets/avt3.jpg";
import avt4 from "../../assets/avt4.webp";
import avt5 from "../../assets/avt5.jpg";
import avt6 from "../../assets/avt6.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const { lang } = useLanguage();

  const testimonials = [
    {
      name: "Marcus Thorne",
      role: lang === "en" ? "Lead Frontend Engineer" : "লিড ফ্রন্টএন্ড ইঞ্জিনিয়ার",
      content: lang === "en" 
        ? "The React architecture they built is incredibly scalable. Our page load speed improved by 40% after the migration." 
        : "তাদের তৈরি করা রিঅ্যাক্ট আর্কিটেকচার অবিশ্বাস্যভাবে স্কেলেবল। মাইগ্রেশনের পর আমাদের পেজ লোড স্পিড ৪০% বৃদ্ধি পেয়েছে।",
      avatar: avt1,
    },
    {
      name: "Alex Rodriguez",
      role: lang === "en" ? "Technical Product Manager" : "টেকনিক্যাল প্রোডাক্ট ম্যানেজার",
      content: lang === "en" 
        ? "Most teams struggle with design nuance, but they nailed the Framer Motion interactions perfectly." 
        : "বেশিরভাগ টিম ডিজাইনের সূক্ষ্ম বিষয়গুলো নিয়ে হিমশিম খায়, কিন্তু তারা ফ্রেমার মোশন ইন্টারঅ্যাকশনগুলো নিখুঁতভাবে ফুটিয়ে তুলেছে।",
      avatar: avt2,
    },
    {
      name: "Julian Voss",
      role: lang === "en" ? "CTO @ Voss Media" : "সিটিও @ ভস মিডিয়া",
      content: lang === "en" 
        ? "Zero friction. They handled our API integrations with surgical precision and met every single deadline." 
        : "কোনো জটিলতা ছাড়াই তারা আমাদের এপিআই ইন্টিগ্রেশনগুলো অত্যন্ত নির্ভুলভাবে সম্পন্ন করেছে এবং প্রতিটি ডেডলাইন মেনে চলেছে।",
      avatar: avt3,
    },
    {
      name: "Sarah Chen",
      role: lang === "en" ? "Founder & CEO" : "ফাউন্ডার এবং সিইও",
      content: lang === "en" 
        ? "Technical SEO was a huge priority for us. The site structure they delivered is perfect for our ranking strategy." 
        : "টেকনিক্যাল এসইও আমাদের জন্য বড় অগ্রাধিকার ছিল। তারা যে সাইট স্ট্রাকচার দিয়েছে তা আমাদের র‍্যাঙ্কিং স্ট্র্যাটেজির জন্য একদম পারফেক্ট।",
      avatar: avt4,
    },
    {
      name: "David Miller",
      role: lang === "en" ? "Operations Director" : "অপারেশনস ডিরেক্টর",
      content: lang === "en" 
        ? "Clean code and predictable delivery. It's rare to find this level of consistency in modern development." 
        : "ক্লিন কোড এবং সময়মতো ডেলিভারি। আধুনিক ডেভেলপমেন্টে এই পর্যায়ের কনসিস্টেন্সি পাওয়া সত্যিই দুর্লভ।",
      avatar: avt5,
    },
    {
      name: "Amara Okoro",
      role: lang === "en" ? "Senior UX Researcher" : "সিনিয়র ইউএক্স রিসার্চার",
      content: lang === "en" 
        ? "Our conversion rate jumped significantly after the redesign. The UI feels premium and truly intuitive." 
        : "রিডিজাইনের পর আমাদের কনভার্সন রেট উল্লেখযোগ্যভাবে বেড়েছে। ইউআই (UI) এখন প্রিমিয়াম এবং সত্যিই ইনটুইটিভ মনে হয়।",
      avatar: avt6,
    },
  ];

  const title = lang === "en" ? "Global feedback by " : "বিশেষজ্ঞদের ";
  const highlight = lang === "en" ? "Experts" : "গ্লোবাল ফিডব্যাক";

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
            {title}<span className="text-brand-blue">{highlight}</span>
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
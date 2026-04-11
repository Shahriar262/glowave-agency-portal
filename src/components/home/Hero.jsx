import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import {
  FiTarget,
  FiZap,
  FiPenTool,
  FiDatabase,
  FiAward,
  FiSmartphone,
} from "react-icons/fi";


const Hero = () => {
  const { lang } = useLanguage();

  const text = {
    badge: lang === "en" ? "Digital Excellence Redefined" : "ডিজিটাল এক্সিলেন্সের নতুন সংজ্ঞা",
    titleStart: lang === "en" ? "Architecting " : "",
    titleHighlight: lang === "en" ? "impactful" : "প্রভাবশালী",
    titleEnd: lang === "en" ? " digital narratives." : " ডিজিটাল ন্যারেটিভ তৈরি করছি।",
    desc: lang === "en" 
      ? "Glowave is a design-first studio focusing on high-end aesthetics and seamless functionality for brands that dare to lead."
      : "গ্লোওয়েভ একটি ডিজাইন-ফার্স্ট স্টুডিও যা হাই-এন্ড নান্দনিকতা এবং নিরবচ্ছিন্ন কার্যকারিতার মাধ্যমে ব্র্যান্ডগুলোকে এগিয়ে নিয়ে যায়।",
    btnPrimary: lang === "en" ? "Start a Project" : "প্রজেক্ট শুরু করুন",
    btnSecondary: lang === "en" ? "Our Story" : "আমাদের গল্প"
  };

  const floatingAnimation = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 3, 0],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const icons = [
    {
      component: FiTarget,
      size: "text-xl md:text-3xl",
      color: "text-brand-blue",
      pos: "top-[8%] left-[6%] md:left-[8%]",
      delay: 0,
      mobile: true,
    },
    {
      component: FiPenTool,
      size: "text-xl md:text-2xl",
      color: "text-brand-dark",
      pos: "top-[8%] right-[6%] md:right-[12%]",
      delay: 0.5,
      mobile: true,
    },
    {
      component: FiZap,
      size: "text-lg md:text-2xl",
      color: "text-yellow-500",
      pos: "bottom-[12%] left-[6%] md:left-[10%]",
      delay: 1,
      mobile: true,
    },
    {
      component: FiDatabase,
      size: "text-lg md:text-2xl",
      color: "text-slate-400",
      pos: "bottom-[12%] right-[6%] md:right-[15%]",
      delay: 1.5,
      mobile: true,
    },
    {
      component: FiSmartphone,
      size: "text-xl",
      color: "text-purple-500",
      pos: "top-[65%] md:top-[80px] left-[8%] md:left-[15%]",
      delay: 2,
      mobile: true,
    },
    {
      component: FiAward,
      size: "text-2xl",
      color: "text-emerald-500",
      pos: "top-[7%] right-[18%]",
      delay: 0.8,
      mobile: false,
    },
  ];

  return (
    <section className="relative pt-8 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-brand-blue/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-blue-400/5 blur-[100px] rounded-full -z-10" />

      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className={`absolute p-3 md:p-4 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 z-0 
            ${icon.mobile ? "flex" : "hidden lg:flex"} 
            ${icon.pos} ${icon.color} ${icon.size}`}
          animate={floatingAnimation.animate}
          transition={{ 
            ...floatingAnimation.transition, 
            delay: icon.delay,
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 } 
          }}
        >
          <icon.component />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="inline-flex items-center gap-3 px-5 py-1.5 mb-10 bg-white border border-slate-200 rounded-full shadow-sm"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
            {text.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-[80px] font-extrabold text-[#0f172a] tracking-tight md:tracking-[-0.02em] leading-[1.15] md:leading-[1.1] mb-10"
        >
          {text.titleStart}<span className="text-brand-blue">{text.titleHighlight}</span>{text.titleEnd}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base md:text-[21px] text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed md:leading-[1.6] mb-14"
        >
          {text.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <Link
            to="/services"
            className="w-full sm:w-auto bg-brand-blue text-white font-bold px-10 md:px-12 py-4 md:py-5 rounded-2xl shadow-xl hover:bg-[#0f172a] transition-all active:scale-95"
          >
            {text.btnPrimary}
          </Link>
          <button className="w-full sm:w-auto text-[#0f172a] font-bold px-8 py-4 flex items-center justify-center gap-2 group hover:opacity-70 transition-opacity">
            {text.btnSecondary}
            <span className="group-hover:translate-x-1.5 transition-transform">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
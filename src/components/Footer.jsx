import React from "react";
import { Link } from "react-router"; 
import LogoImage from "../assets/logo-1.png";
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  const text = {
    desc: lang === "en" 
      ? "Crafting premium digital experiences with high-end design and modern SaaS aesthetics." 
      : "হাই-এন্ড ডিজাইন এবং আধুনিক SaaS নান্দনিকতার সাথে প্রিমিয়াম ডিজিটাল অভিজ্ঞতা তৈরি করছি।",
    services: lang === "en" ? "Services" : "সার্ভিসসমূহ",
    company: lang === "en" ? "Company" : "কোম্পানি",
    legal: lang === "en" ? "Legal" : "লিগ্যাল",
    uiux: lang === "en" ? "UI/UX Design" : "ইউআই/ইউএক্স ডিজাইন",
    webDev: lang === "en" ? "Web Development" : "ওয়েব ডেভেলপমেন্ট",
    branding: lang === "en" ? "SaaS Branding" : "SaaS ব্র্যান্ডিং",
    insights: lang === "en" ? "Insights" : "ইনসাইটস",
    contact: lang === "en" ? "Contact" : "যোগাযোগ",
    careers: lang === "en" ? "Careers" : "ক্যারিয়ার",
    privacy: lang === "en" ? "Privacy Policy" : "প্রাইভেসি পলিসি",
    terms: lang === "en" ? "Terms of Use" : "টার্মস অফ ইউজ",
    refund: lang === "en" ? "Refund Policy" : "রিফান্ড পলিসি",
    rights: lang === "en" ? "© 2026 GLOWAVE AGENCY — ALL RIGHTS RESERVED" : "© ২০২৬ গ্লোওয়েভ এজেন্সি — সর্বস্বত্ব সংরক্ষিত",
    systems: lang === "en" ? "Systems Online" : "সিস্টেম অনলাইন",
    location: lang === "en" ? "Dhaka, BD" : "ঢাকা, বাংলাদেশ"
  };

  return (
    <footer className="px-6 pb-10 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-white border border-slate-200 shadow-xl shadow-blue-500/5 overflow-hidden"
      >
        <div className="p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-start gap-12">
          
          <div className="max-w-sm flex flex-col items-start">
            <Link to="/" className="inline-block -ml-6 -mt-8 md:-mt-10 mb-[-30px]">
              <img 
                src={LogoImage} 
                alt="Glowave" 
                className="h-38 md:h-40 w-auto object-contain" 
              />
            </Link>
            
            <p className="text-slate-500 text-lg leading-relaxed pl-2 mt-4">
              {text.desc}
            </p>
            
            <div className="flex gap-4 mt-8 pl-2">
              {[
                { icon: <FaXTwitter />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaYoutube />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-400 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 w-full lg:w-auto">
            <div className="flex flex-col gap-5">
              <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{text.services}</h6>
              <div className="flex flex-col gap-3">
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.uiux}</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.webDev}</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.branding}</Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{text.company}</h6>
              <div className="flex flex-col gap-3">
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.insights}</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.contact}</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.careers}</Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 col-span-2 md:col-span-1 border-t md:border-t-0 pt-8 md:pt-0 border-slate-50">
              <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{text.legal}</h6>
              <div className="flex flex-col gap-3">
                <Link to="/privacy" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.privacy}</Link>
                <Link to="terms" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.terms}</Link>
                <Link to="/refund" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">{text.refund}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
            {text.rights}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{text.systems}</span>
            </div>
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">{text.location}</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
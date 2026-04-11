import React from "react";
import { Link } from "react-router"; 
import LogoImage from "../assets/logo-1.png";
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-6 pb-10 mt-20 bg-[#F8FAFF]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden"
      >
        <div className="p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Logo & Info Section */}
          <div className="max-w-sm flex flex-col items-start">
            <Link to="/" className="inline-block -ml-6 -mt-8 md:-mt-10 mb-[-30px]">
              <img 
                src={LogoImage} 
                alt="Glowave" 
                className="h-38 md:h-40 w-auto object-contain" 
              />
            </Link>
            
            <p className="text-slate-500 text-lg leading-relaxed pl-2 mt-4">
              Crafting premium digital experiences with high-end design and modern SaaS aesthetics.
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
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 w-full lg:w-auto">
            <div className="flex flex-col gap-5">
              <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services</h6>
              <div className="flex flex-col gap-3">
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">UI/UX Design</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Web Development</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">SaaS Branding</Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Company</h6>
              <div className="flex flex-col gap-3">
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Insights</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
                <Link to="#" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Careers</Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 col-span-2 md:col-span-1 border-t md:border-t-0 pt-8 md:pt-0 border-slate-50">
              <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Legal</h6>
              <div className="flex flex-col gap-3">
                <Link to="/privacy" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link to="terms" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Terms of Use</Link>
                <Link to="/refund" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-900 px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
            © 2026 GLOWAVE AGENCY — ALL RIGHTS RESERVED
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Systems Online</span>
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Dhaka, BD</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CTA = () => {
  const { lang } = useLanguage();

  const text = {
    badge: lang === "en" ? "Ready to start?" : "আপনি কি প্রস্তুত?",
    titleStart: lang === "en" ? "Let’s build your " : "আপনার ",
    titleHighlight: lang === "en" ? "next masterpiece." : "পরবর্তী মাস্টারপিস তৈরি করি।",
    btnPrimary: lang === "en" ? "Start a Project" : "প্রজেক্ট শুরু করুন",
    btnSecondary: lang === "en" ? "Contact Us" : "যোগাযোগ করুন"
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          
          className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center"
        >
          {/* Background Decorative Elements (Animated) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles size={14} />
              {text.badge}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-black text-white leading-none mb-8"
            >
              {text.titleStart} <br />
              <span className="text-brand-blue">{text.titleHighlight}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary Button */}
              <button className="group cursor-pointer relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all duration-300 flex items-center gap-2 overflow-hidden">
                <span>{text.btnPrimary}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button */}
              <button className="px-8 cursor-pointer py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all duration-300">
                {text.btnSecondary}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
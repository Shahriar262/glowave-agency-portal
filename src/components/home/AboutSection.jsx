import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiUsers,
  FiCheck,
  FiZap,
  FiLayers,
  FiGlobe,
  FiSmile,
  FiShield,
  FiAward,
  FiMousePointer,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router";

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 bg-[#F8FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue bg-blue-50 rounded-full border border-blue-100 mb-6">
            Independent digital studio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-6">
            We design websites that{" "}
            <span className="text-brand-blue">speak with confidence.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium mb-5 leading-relaxed">
            We partner with creatives and startups to clarify complex ideas and
            build digital experiences that feel alive and trusted.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-brand-blue transition-colors duration-300 group"
          >
            <span className="border-b-2 border-slate-900 group-hover:border-brand-blue pb-0.5">
              Read our full story
            </span>
            <FiArrowUpRight className="text-xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Card Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card 1: Our Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="flex-[1.2] bg-[#E1F9FF] p-10 rounded-[3rem] border border-blue-200/60 shadow-sm relative group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-blue/20 text-xl">
                <FiTarget />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our mission</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <FiShield />, text: "Design for trust" },
                { icon: <FiZap />, text: "Clarify complex ideas" },
                { icon: <FiTarget />, text: "Lasting momentum" },
                { icon: <FiCheck />, text: "Intention first" },
                { icon: <FiAward />, text: "Pixel perfection" },
                { icon: <FiMousePointer />, text: "Interactive UI" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-white shadow-sm hover:shadow-md transition-all group/item"
                >
                  <span className="text-brand-blue text-lg group-hover/item:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[13px] font-bold text-slate-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Who We Are */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="flex-1 bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden flex flex-col"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 text-brand-blue rounded-2xl flex items-center justify-center border border-white/10 text-xl backdrop-blur-sm">
                  <FiUsers />
                </div>
                <h3 className="text-2xl font-bold">Who we are</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: <FiLayers />,
                    text: "Small, senior team",
                    tag: "Expert",
                  },
                  {
                    icon: <FiGlobe />,
                    text: "Flexible remote work",
                    tag: "Global",
                  },
                  {
                    icon: <FiSmile />,
                    text: "Honest, clear feedback",
                    tag: "Calm",
                  },
                  { icon: <FiCheck />, text: "Conversion-minded", tag: "ROI" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group/feat"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-brand-blue group-hover/feat:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-[14px] font-semibold text-slate-200">
                        {item.text}
                      </span>
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold border border-slate-700 px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/30 blur-[60px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

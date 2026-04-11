import React from "react";
import { motion } from "framer-motion";
import {
  FiLayout,
  FiZap,
  FiTarget,
  FiSmartphone,
  FiShield,
  FiLayers,
  FiCode,
  FiEye,
} from "react-icons/fi";

const Features = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const featureList = [
    {
      title: "Custom UI Architecture",
      desc: "High-end design systems tailored for your brand's unique voice and professional aesthetic.",
      icon: <FiLayout />,
      span: "lg:col-span-2",
      bg: "bg-gradient-to-br from-[#CAF4FF] via-[#E1F9FF] to-[#BDEFFF] border-blue-200",
    },
    {
      title: "Fast Performance",
      desc: "Optimized load speeds.",
      icon: <FiZap />,
      span: "lg:col-span-1",
      bg: "bg-white border-slate-100 shadow-sm",
    },
    {
      title: "Goal Driven",
      desc: "Focus on user conversion.",
      icon: <FiTarget />,
      span: "lg:col-span-1",
      bg: "bg-white border-slate-100 shadow-sm",
    },
    {
      title: "Mobile First",
      desc: "Perfect on every device.",
      icon: <FiSmartphone />,
      span: "lg:col-span-1",
      bg: "bg-white border-slate-100 shadow-sm",
    },
    {
      title: "Secure Builds",
      desc: "Trust-first development.",
      icon: <FiShield />,
      span: "lg:col-span-1",
      bg: "bg-white border-slate-100 shadow-sm",
    },
    {
      title: "Clean Layering",
      desc: "Scalable asset management.",
      icon: <FiLayers />,
      span: "lg:col-span-1",
      bg: "bg-white border-slate-100 shadow-sm",
    },
    {
      title: "Modern Stack",
      desc: "Latest React and Tailwind.",
      icon: <FiCode />,
      span: "lg:col-span-1",
      bg: "bg-white border-slate-100 shadow-sm",
    },
    {
      title: "Visual Excellence",
      desc: "Immersive visuals and atmospheric scenes built specifically for high-end modern online brands.",
      icon: <FiEye />,
      span: "lg:col-span-2",
      bg: "bg-gradient-to-br from-[#CAF4FF] via-[#E1F9FF] to-[#BDEFFF] border-blue-200",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue bg-blue-100/50 rounded-full border border-blue-200 mb-6">
            Our Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Elevating brands through{" "}
            <span className="text-brand-blue">intelligent design.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            We combine high-end aesthetics with functional code to build
            websites that stand out.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`${feature.span} ${feature.bg} p-8 rounded-[2.5rem] border flex flex-col justify-between group transition-all duration-500`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 
                ${
                  feature.bg.includes("gradient")
                    ? "bg-white text-brand-blue border border-white/60"
                    : "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p
                  className={"text-sm leading-relaxed font-medium text-slate-600"}
                >
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

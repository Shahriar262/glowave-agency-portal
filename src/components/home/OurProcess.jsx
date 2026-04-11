import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCode, FiZap, FiEdit3, FiGlobe } from "react-icons/fi";

const processSteps = [
  {
    title: "Discovery & Strategy",
    desc: "We dive deep into your goals, target audience, and market landscape to craft a roadmap for success.",
    icon: <FiSearch />,
    bg: "bg-[#D6EFFF]",
    border: "border-blue-300",
  },
  {
    title: "Wireframing & UI Design",
    desc: "We visualize the user journey through structural wireframes and then craft intuitive, high-fidelity interfaces.",
    icon: <FiEdit3 />,
    bg: "bg-[#DDE4FF]",
    border: "border-indigo-300",
  },
  {
    title: "Frontend Development",
    desc: "Using modern frameworks, we build a seamless, scalable, and pixel-perfect digital product.",
    icon: <FiCode />,
    bg: "bg-[#E9E1FF]",
    border: "border-purple-300",
  },
  {
    title: "Testing & Optimization",
    desc: "A meticulous QA process guarantees bug-free software, with performance tuning for speed and efficiency.",
    icon: <FiZap />,
    bg: "bg-[#FFF2C2]",
    border: "border-amber-300",
  },
  {
    title: "Deployment & Growth",
    desc: "We ensure a smooth launch and offer ongoing support to scale your product to a global audience.",
    icon: <FiGlobe />,
    bg: "bg-[#CFFADE]",
    border: "border-green-300",
  },
];

const OurProcess = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Centered Heading & Paragraph */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            A methodical <span className="text-brand-blue">framework</span> for
            success.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            From initial strategy to a global launch, we ensure precision and
            excellence at every stage.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col items-center">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="sticky top-28 w-full mb-7"
              style={{
                top: `${112 + index * 92}px`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className={`${step.bg} ${step.border} border p-10 md:p-12 rounded-[2.5rem] shadow flex flex-col md:flex-row items-start gap-8 group`}
              >
                {/* Icon Box */}
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/60 flex items-center justify-center text-3xl border border-white/40 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Target,
  Layers,
  Search,
  PenTool,
  Code,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import CTA from "../components/services/CTA";

const Services = () => {
  const processes = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understanding your vision and setting a strategic roadmap for growth.",
      icon: <Search size={22} />,
    },
    {
      step: "02",
      title: "Design",
      desc: "Crafting world-class UI/UX interfaces that prioritize conversion and beauty.",
      icon: <PenTool size={22} />,
    },
    {
      step: "03",
      title: "Build",
      desc: "Developing high-performance applications with React and Next.js.",
      icon: <Code size={22} />,
    },
    {
      step: "04",
      title: "Scale",
      desc: "Launching your product and providing dedicated support for success.",
      icon: <Rocket size={22} />,
    },
  ];

  const serviceList = [
    {
      title: "UI/UX Strategy",
      icon: <Target />,
      text: "User-centric designs built on psychological principles to maximize conversion.",
    },
    {
      title: "Product Dev",
      icon: <Zap />,
      text: "Custom, scalable web applications developed with clean and efficient code.",
    },
    {
      title: "SaaS Branding",
      icon: <Layers />,
      text: "Iconic visual identities that give your company a competitive edge in tech.",
    },
  ];

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em]">
              Our Expertise
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
            Expertise that <br />{" "}
            <span className="text-brand-blue">Drives Results.</span>
          </h1>
          <p className="max-w-xl text-slate-500 text-lg font-medium leading-relaxed">
            We deliver premium digital solutions tailored for the next
            generation of high-growth SaaS and tech companies.
          </p>
        </motion.div>

        {/* High-End Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 bg-white shadow-md rounded-[3rem] border border-slate-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </div>
              <div className="w-16 h-16 bg-slate-200 rounded-[1.5rem] flex items-center justify-center mb-12 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                {service.text}
              </p>
              <div className="h-1.5 w-12 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-blue-600 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Process Section */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              The Process.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white shadow-md border border-slate-200 rounded-[2.5rem] hover:bg-slate-900 group transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-500">
                    {step.icon}
                  </div>
                  <span className="text-5xl font-black text-slate-400 group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 group-hover:text-white mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CTA />
      </div>
    </div>
  );
};

export default Services;

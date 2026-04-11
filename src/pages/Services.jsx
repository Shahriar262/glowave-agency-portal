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
import { useLanguage } from "../context/LanguageContext";
import CTA from "../components/services/CTA";

const Services = () => {
  const { lang } = useLanguage();

  const processes = [
    {
      step: "01",
      title: lang === "en" ? "Discovery" : "ডিসকভারি",
      desc: lang === "en" 
        ? "Understanding your vision and setting a strategic roadmap for growth."
        : "আপনার ভিশন বোঝা এবং প্রবৃদ্ধির জন্য একটি কৌশলগত রোডম্যাপ তৈরি করা।",
      icon: <Search size={22} />,
    },
    {
      step: "02",
      title: lang === "en" ? "Design" : "ডিজাইন",
      desc: lang === "en"
        ? "Crafting world-class UI/UX interfaces that prioritize conversion and beauty."
        : "কনভার্সন এবং নান্দনিকতাকে প্রাধান্য দিয়ে বিশ্বমানের UI/UX ইন্টারফেস তৈরি করা।",
      icon: <PenTool size={22} />,
    },
    {
      step: "03",
      title: lang === "en" ? "Build" : "ডেভেলপমেন্ট",
      desc: lang === "en"
        ? "Developing high-performance applications with React and Next.js."
        : "React এবং Next.js ব্যবহার করে হাই-পারফরম্যান্স অ্যাপ্লিকেশন তৈরি করা।",
      icon: <Code size={22} />,
    },
    {
      step: "04",
      title: lang === "en" ? "Scale" : "স্কেলিং",
      desc: lang === "en"
        ? "Launching your product and providing dedicated support for success."
        : "আপনার প্রোডাক্ট লঞ্চ করা এবং সাফল্যের জন্য ডেডিকেটেড সাপোর্ট প্রদান করা।",
      icon: <Rocket size={22} />,
    },
  ];

  const serviceList = [
    {
      title: lang === "en" ? "UI/UX Strategy" : "UI/UX স্ট্র্যাটেজি",
      icon: <Target />,
      text: lang === "en"
        ? "User-centric designs built on psychological principles to maximize conversion."
        : "কনভার্সন বাড়ানোর জন্য মনস্তাত্ত্বিক নীতির ওপর ভিত্তি করে ইউজার-সেন্ট্রিক ডিজাইন।",
    },
    {
      title: lang === "en" ? "Product Dev" : "প্রোডাক্ট ডেভেলপমেন্ট",
      icon: <Zap />,
      text: lang === "en"
        ? "Custom, scalable web applications developed with clean and efficient code."
        : "ক্লিন এবং দক্ষ কোডের মাধ্যমে কাস্টম ও স্কেলেবল ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট।",
    },
    {
      title: lang === "en" ? "SaaS Branding" : "SaaS ব্র্যান্ডিং",
      icon: <Layers />,
      text: lang === "en"
        ? "Iconic visual identities that give your company a competitive edge in tech."
        : "আইকনিক ভিজ্যুয়াল আইডেন্টিটি যা আপনার কোম্পানিকে টেক ওয়ার্ল্ডে এগিয়ে রাখবে।",
    },
  ];

  const headerText = {
    badge: lang === "en" ? "Our Expertise" : "আমাদের দক্ষতা",
    titleStart: lang === "en" ? "Expertise that " : "দক্ষতা যা ",
    titleEnd: lang === "en" ? "Drives Results." : "ফলাফল নিশ্চিত করে।",
    desc: lang === "en"
      ? "We deliver premium digital solutions tailored for the next generation of high-growth SaaS and tech companies."
      : "আমরা পরবর্তী প্রজন্মের হাই-গ্রোথ SaaS এবং টেক কোম্পানিগুলোর জন্য প্রিমিয়াম ডিজিটাল সলিউশন প্রদান করি।",
    processTitle: lang === "en" ? "The Process." : "কাজের ধাপসমূহ।"
  };

  return (
    <div className="pt-10 pb-24">
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
              {headerText.badge}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
            {headerText.titleStart} <br />{" "}
            <span className="text-brand-blue">{headerText.titleEnd}</span>
          </h1>
          <p className="max-w-xl text-slate-500 text-lg font-medium leading-relaxed">
            {headerText.desc}
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
              {headerText.processTitle}
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
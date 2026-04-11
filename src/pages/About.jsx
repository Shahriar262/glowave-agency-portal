import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import aboutImg from "../assets/about-1.avif";
import team1 from "../assets/team-1.webp";
import team2 from "../assets/team-2.webp";
import team3 from "../assets/team-3.jpg";

const About = () => {
  const { lang } = useLanguage();

  const stats = [
    { 
      label: lang === "en" ? "Projects Completed" : "প্রজেক্ট সম্পন্ন", 
      value: "120+", 
      icon: <Rocket size={20} /> 
    },
    { 
      label: lang === "en" ? "Happy Clients" : "সন্তুষ্ট ক্লায়েন্ট", 
      value: "80+", 
      icon: <Users size={20} /> 
    },
    { 
      label: lang === "en" ? "Design Awards" : "ডিজাইন অ্যাওয়ার্ড", 
      value: "15+", 
      icon: <Award size={20} /> 
    },
    { 
      label: lang === "en" ? "Success Rate" : "সাফল্যের হার", 
      value: "98%", 
      icon: <Target size={20} /> 
    },
  ];

  const teams = [
    { name: "John Doe", role: lang === "en" ? "Creative Director" : "ক্রিয়েটিভ ডিরেক্টর", img: team1 },
    { name: "Sarah Smith", role: lang === "en" ? "Lead Designer" : "লিড ডিজাইনার", img: team2 },
    { name: "Alex Johnson", role: lang === "en" ? "Tech Architect" : "টেক আর্কিটেক্ট", img: team3 },
  ];

  const text = {
    badge: lang === "en" ? "Our Story" : "আমাদের গল্প",
    titleStart: lang === "en" ? "We build digital " : "আমরা তৈরি করি ডিজিটাল ",
    titleHighlight: lang === "en" ? "Masterpieces." : "মাস্টারপিস।",
    desc: lang === "en" 
      ? "Glowave is a boutique creative studio focused on high-end design and scalable technology. We help modern brands dominate their markets through world-class digital experiences."
      : "গ্লোওয়েভ একটি বুটিক ক্রিয়েটিভ স্টুডিও যা হাই-এন্ড ডিজাইন এবং স্কেলেবল টেকনোলজির ওপর কাজ করে। আমরা বিশ্বমানের ডিজিটাল অভিজ্ঞতার মাধ্যমে আধুনিক ব্র্যান্ডগুলোকে বাজারে আধিপত্য বিস্তারে সহায়তা করি।",
    strategyTitle: lang === "en" ? "Strategy over " : "অনুমানের চেয়ে ",
    strategyHighlight: lang === "en" ? "Guesswork." : "কৌশল বড়।",
    strategyDesc: lang === "en"
      ? "Every pixel we place and every line of code we write is driven by a deep understanding of user psychology and business goals."
      : "আমাদের প্রতিটি পিক্সেল এবং কোডের প্রতিটি লাইন ইউজার সাইকোলজি এবং বিজনেস গোল-এর গভীর উপলব্ধির মাধ্যমে তৈরি করা হয়।",
    points: lang === "en" 
      ? ["Data-Driven Design", "Scalable Performance", "User-Centric Approach"] 
      : ["ডেটা-ড্রিভেন ডিজাইন", "স্কেলেবল পারফরম্যান্স", "ইউজার-সেন্ট্রিক অ্যাপ্রোচ"],
    teamTitle: lang === "en" ? "The Minds Behind." : "আমাদের কারিগররা।"
  };

  return (
    <div className="pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-32 max-w-4xl"
        >
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block italic">
            {text.badge}
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-10">
            {text.titleStart} <br />{" "}
            <span className="text-brand-blue">{text.titleHighlight}</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            {text.desc}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center lg:text-left"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Strategy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img
              src={aboutImg}
              alt="Our Strategy"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {text.strategyTitle} <br />{" "}
              <span className="text-blue-600">{text.strategyHighlight}</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              {text.strategyDesc}
            </p>
            <div className="space-y-4">
              {text.points.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-slate-900 font-bold uppercase text-xs tracking-widest">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-16">
            {text.teamTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 rounded-[3rem] overflow-hidden h-96">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-2xl font-black text-slate-900">
                  {member.name}
                </h4>
                <p className="text-blue-600 text-xs font-black uppercase tracking-widest mt-2">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
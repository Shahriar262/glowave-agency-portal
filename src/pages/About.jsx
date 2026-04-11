import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Rocket } from "lucide-react";
import aboutImg from "../assets/about-1.avif";
import team1 from "../assets/team-1.webp";
import team2 from "../assets/team-2.webp";
import team3 from "../assets/team-3.jpg";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "120+", icon: <Rocket size={20} /> },
    { label: "Happy Clients", value: "80+", icon: <Users size={20} /> },
    { label: "Design Awards", value: "15+", icon: <Award size={20} /> },
    { label: "Success Rate", value: "98%", icon: <Target size={20} /> },
  ];

  const teams = [
    { name: "John Doe", role: "Creative Director", img: team1 },
    { name: "Sarah Smith", role: "Lead Designer", img: team2 },
    { name: "Alex Johnson", role: "Tech Architect", img: team3 },
  ];

  return (
    <div className="pt-15 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-32 max-w-4xl"
        >
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block italic">
            Our Story
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
            We build digital <br />{" "}
            <span className="text-brand-blue">Masterpieces.</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            Glowave is a boutique creative studio focused on high-end design and
            scalable technology. We help modern brands dominate their markets
            through world-class digital experiences.
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
              Strategy over <br />{" "}
              <span className="text-blue-600">Guesswork.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Every pixel we place and every line of code we write is driven by
              a deep understanding of user psychology and business goals.
            </p>
            <div className="space-y-4">
              {[
                "Data-Driven Design",
                "Scalable Performance",
                "User-Centric Approach",
              ].map((item, idx) => (
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
            The Minds Behind.
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

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F8FAFF] pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Privacy Policy</h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-12">Updated: April 11, 2026</p>
          
          <div className="space-y-10 text-slate-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Data Collection</h2>
              <p>We collect personal information such as name, email, and project details when you use our contact form or subscribe to our newsletter.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. Usage of Data</h2>
              <p>Your data is used solely to provide services, process requests, and send occasional project-related updates.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Security</h2>
              <p>We implement industry-standard security protocols to protect your information from unauthorized access.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
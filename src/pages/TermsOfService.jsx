import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="bg-[#F8FAFF] pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Terms of Service</h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-12">Updated: April 11, 2026</p>
          
          <div className="space-y-10 text-slate-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Service Agreement</h2>
              <p>By using Glowave services, you agree to our terms. We provide UI/UX design and development based on individual project contracts.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. Ownership</h2>
              <p>Full ownership of design and code assets is transferred to the client upon receipt of final payment.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Limitations</h2>
              <p>Glowave is not liable for indirect damages arising from the use or inability to use our digital products.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
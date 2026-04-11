import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <div className="bg-[#F8FAFF] pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Refund Policy</h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-12">Updated: April 11, 2026</p>
          
          <div className="space-y-10 text-slate-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">1. Deposits</h2>
              <p>Project deposits are non-refundable once the discovery and design phase has officially started.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">2. Cancellations</h2>
              <p>If a project is cancelled mid-way, only the portion of the work not yet completed will be eligible for a partial refund evaluation.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4">3. Satisfaction</h2>
              <p>We offer up to three rounds of revisions to ensure you are 100% satisfied with the final deliverable.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
import React from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-white rounded-[4rem] border border-slate-100 p-12 md:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]"
        >
          {/* Animated Decorative Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] -mr-40 -mt-40 opacity-60" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Sparkles size={12} />
                Insider Insights
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
                Fresh growth <br /> <span className="text-slate-300">delivered.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Join our exclusive circle of 500+ founders. Get high-end design tips and SaaS scaling strategies every Tuesday.
              </p>
            </div>

            <div className="w-full max-w-md">
              <form className="relative flex flex-col gap-4">
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="w-full px-8 py-7 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 outline-none font-bold text-slate-900 transition-all shadow-inner"
                  />
                  <button className="absolute right-3 top-3 bottom-3 px-8 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl transition-all duration-300 flex items-center gap-2 group-active:scale-95">
                    <span className="font-black text-sm uppercase tracking-wider">Join</span>
                    <Send size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-3 pl-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-6 h-6 rounded-full border-2 border-white" alt="user" />
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Already joined by top SaaS founders
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      q: "How long does a typical project take?",
      a: "Usually, it takes 2-4 weeks. We prioritize quality and clean code to ensure a premium result for your business.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes, we provide 30 days of free technical support to fix any bugs and ensure everything is running smoothly.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely. Every project we build is 'Mobile-First,' ensuring a seamless experience on all devices.",
    },
    {
      q: "Which technologies do you use?",
      a: "We specialize in modern technologies like React.js, Next.js, and Tailwind CSS for high performance.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFF]">
      <div className="max-w-3xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-l-4 border-blue-600 pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Questions <br /> & Answers.
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {questions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-[2.5rem] border transition-all duration-300 ${
                openIndex === i
                  ? "bg-white border-blue-100 shadow-xl shadow-blue-500/5"
                  : "bg-white border-slate-300 shadow"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left outline-none"
              >
                <span
                  className={`text-lg md:text-xl font-bold transition-colors ${
                    openIndex === i ? "text-blue-600" : "text-slate-800"
                  }`}
                >
                  {item.q}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    openIndex === i ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  <Plus size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <p className="text-slate-600 text-lg leading-relaxed pt-4 border-t border-slate-50">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
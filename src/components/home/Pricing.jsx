import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "$499", features: ["Basic SEO", "React Development", "5 Pages", "Email Support"], bg: "bg-white", text: "text-slate-900" },
    { name: "Growth", price: "$999", features: ["Advanced SEO", "Custom UI/UX", "10 Pages", "Priority Support"], bg: "bg-slate-900", text: "text-white", popular: true },
    { name: "Premium", price: "$1999", features: ["Full Marketing Suite", "Dedicated Dev", "Unlimited Pages", "24/7 Support"], bg: "bg-white", text: "text-slate-900" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto -mt-3 px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Simple Pricing
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`p-10 rounded-[2.5rem] border border-slate-300 shadow-md ${plan.bg} ${plan.text} relative group`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-4 py-1.5 rounded-full uppercase font-black tracking-widest shadow-lg">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-4 opacity-80">{plan.name}</h3>
            <div className="text-5xl font-black mb-8">{plan.price}</div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium">
                  <FiCheck className={plan.popular ? "text-blue-400" : "text-blue-600"} /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 cursor-pointer rounded-2xl font-bold transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
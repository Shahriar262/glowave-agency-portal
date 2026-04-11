import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const RefundPolicy = () => {
  const { lang } = useLanguage();

  const text = {
    title: lang === "en" ? "Refund Policy" : "রিফান্ড পলিসি",
    updated: lang === "en" ? "Updated: April 11, 2026" : "আপডেট করা হয়েছে: ১১ এপ্রিল, ২০২৬",
    sections: [
      {
        id: "1",
        title: lang === "en" ? "1. Deposits" : "১. ডিপোজিট",
        content: lang === "en" 
          ? "Project deposits are non-refundable once the discovery and design phase has officially started."
          : "ডিসকভারি এবং ডিজাইন ফেজ আনুষ্ঠানিকভাবে শুরু হয়ে যাওয়ার পর প্রজেক্ট ডিপোজিট অফেরতযোগ্য।"
      },
      {
        id: "2",
        title: lang === "en" ? "2. Cancellations" : "২. ক্যানসেলেশন",
        content: lang === "en"
          ? "If a project is cancelled mid-way, only the portion of the work not yet completed will be eligible for a partial refund evaluation."
          : "প্রজেক্ট মাঝপথে বাতিল করা হলে, শুধুমাত্র অসমাপ্ত কাজের অংশটুকুর জন্য আংশিক রিফান্ড বিবেচনা করা হতে পারে।"
      },
      {
        id: "3",
        title: lang === "en" ? "3. Satisfaction" : "৩. সন্তুষ্টি",
        content: lang === "en"
          ? "We offer up to three rounds of revisions to ensure you are 100% satisfied with the final deliverable."
          : "ফাইনাল ডেলিভারিতে আপনার শতভাগ সন্তুষ্টি নিশ্চিত করতে আমরা তিনটি রিভিশন রাউন্ড অফার করি।"
      }
    ]
  };

  return (
    <div className="bg-[#F8FAFF] pt-10 pb-24 min-h-screen px-6">
      
      <div className="max-w-4xl mx-auto bg-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
              {text.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-blue-600" />
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest italic">
                {text.updated}
              </p>
            </div>
          </div>
          
          {/* Policy Sections */}
          <div className="space-y-16">
            {text.sections.map((section) => (
              <motion.section 
                key={section.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed max-w-3xl">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Contact Footer */}
          <div className="mt-24 pt-12 border-t border-slate-200">
            <p className="text-slate-400 text-sm md:text-base font-medium italic">
              {lang === "en" 
                ? "For any refund-related queries, please email us at hello@glowave.agency"
                : "রিফান্ড সংক্রান্ত যেকোনো জিজ্ঞাসার জন্য আমাদের ইমেল করুন: hello@glowave.agency"}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
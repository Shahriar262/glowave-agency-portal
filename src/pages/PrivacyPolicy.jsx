import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const PrivacyPolicy = () => {
  const { lang } = useLanguage();

  const text = {
    title: lang === "en" ? "Privacy Policy" : "প্রাইভেসি পলিসি",
    updated: lang === "en" ? "Updated: April 11, 2026" : "আপডেট করা হয়েছে: ১১ এপ্রিল, ২০২৬",
    sections: [
      {
        id: "1",
        title: lang === "en" ? "1. Data Collection" : "১. তথ্য সংগ্রহ",
        content: lang === "en" 
          ? "We collect personal information such as name, email, and project details when you use our contact form or subscribe to our newsletter."
          : "আপনি যখন আমাদের কন্টাক্ট ফর্ম ব্যবহার করেন বা নিউজলেটারে সাবস্ক্রাইব করেন, তখন আমরা নাম, ইমেল এবং প্রজেক্টের বিবরণের মতো ব্যক্তিগত তথ্য সংগ্রহ করি।"
      },
      {
        id: "2",
        title: lang === "en" ? "2. Usage of Data" : "২. তথ্যের ব্যবহার",
        content: lang === "en"
          ? "Your data is used solely to provide services, process requests, and send occasional project-related updates."
          : "আপনার তথ্য শুধুমাত্র সেবা প্রদান, অনুরোধ প্রসেস করা এবং মাঝে মাঝে প্রজেক্ট সংক্রান্ত আপডেট পাঠানোর জন্য ব্যবহার করা হয়।"
      },
      {
        id: "3",
        title: lang === "en" ? "3. Security" : "৩. নিরাপত্তা",
        content: lang === "en"
          ? "We implement industry-standard security protocols to protect your information from unauthorized access."
          : "আপনার তথ্য অননুমোদিত অ্যাক্সেস থেকে রক্ষা করার জন্য আমরা ইন্ডাস্ট্রি-স্ট্যান্ডার্ড নিরাপত্তা প্রোটোকল অনুসরণ করি।"
      }
    ]
  };

  return (
    <div className="bg-[#F8FAFF] pt-32 pb-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto bg-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
              {text.title}
            </h1>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] italic">
              {text.updated}
            </p>
          </div>
          
          {/* Content Body */}
          <div className="space-y-12">
            {text.sections.map((section) => (
              <section key={section.id} className="group">
                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-3xl">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-20 pt-10 border-t border-slate-200">
            <p className="text-slate-400 text-sm font-medium italic">
              {lang === "en" 
                ? "For further inquiries, please reach out to our legal department at hello@glowave.agency."
                : "আরও অনুসন্ধানের জন্য, অনুগ্রহ করে আমাদের লিগ্যাল ডিপার্টমেন্টে hello@glowave.agency এ যোগাযোগ করুন।"}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
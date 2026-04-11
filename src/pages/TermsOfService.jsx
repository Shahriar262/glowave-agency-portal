import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const TermsOfService = () => {
  const { lang } = useLanguage();

  const text = {
    title: lang === "en" ? "Terms of Service" : "টার্মস অফ সার্ভিস",
    updated: lang === "en" ? "Updated: April 11, 2026" : "আপডেট করা হয়েছে: ১১ এপ্রিল, ২০২৬",
    sections: [
      {
        id: "1",
        title: lang === "en" ? "1. Service Agreement" : "১. সার্ভিস এগ্রিমেন্ট",
        content: lang === "en" 
          ? "By using Glowave services, you agree to our terms. We provide UI/UX design and development based on individual project contracts."
          : "গ্লোওয়েভ-এর সেবা ব্যবহারের মাধ্যমে আপনি আমাদের শর্তাবলীতে সম্মত হচ্ছেন। আমরা ব্যক্তিগত প্রজেক্ট চুক্তির ভিত্তিতে UI/UX ডিজাইন এবং ডেভেলপমেন্ট সেবা প্রদান করি।"
      },
      {
        id: "2",
        title: lang === "en" ? "2. Ownership" : "২. মালিকানা",
        content: lang === "en"
          ? "Full ownership of design and code assets is transferred to the client upon receipt of final payment."
          : "চূড়ান্ত পেমেন্ট পাওয়ার পর ডিজাইন এবং কোড অ্যাসেট-এর সম্পূর্ণ মালিকানা ক্লায়েন্টের কাছে হস্তান্তর করা হয়।"
      },
      {
        id: "3",
        title: lang === "en" ? "3. Limitations" : "৩. সীমাবদ্ধতা",
        content: lang === "en"
          ? "Glowave is not liable for indirect damages arising from the use or inability to use our digital products."
          : "আমাদের ডিজিটাল পণ্য ব্যবহার বা ব্যবহারে অক্ষমতার ফলে উদ্ভূত কোনো পরোক্ষ ক্ষতির জন্য গ্লোওয়েভ দায়ী থাকবে না।"
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
          {/* Header Section */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
              {text.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-blue-600" />
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest italic">
                {text.updated}
              </p>
            </div>
          </div>
          
          {/* Main Content */}
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

          {/* Contact Information */}
          <div className="mt-24 pt-12 border-t border-slate-200">
            <p className="text-slate-400 text-sm md:text-base font-medium italic">
              {lang === "en" 
                ? "For detailed legal inquiries, please contact our team at hello@glowave.agency"
                : "বিস্তারিত আইনি জিজ্ঞাসার জন্য আমাদের টিমের সাথে যোগাযোগ করুন: hello@glowave.agency"}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
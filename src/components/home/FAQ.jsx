import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const FAQ = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      q: lang === "en" ? "How long does a typical project take?" : "একটি প্রজেক্ট শেষ করতে কত সময় লাগে?",
      a: lang === "en" 
        ? "Usually, it takes 2-4 weeks. We prioritize quality and clean code to ensure a premium result for your business."
        : "সাধারণত ২-৪ সপ্তাহ সময় লাগে। আমরা কোডের কোয়ালিটি এবং ক্লিন কোডকে প্রাধান্য দিই যাতে আপনার ব্যবসার জন্য একটি প্রিমিয়াম আউটপুট নিশ্চিত হয়।",
    },
    {
      q: lang === "en" ? "Do you offer post-launch support?" : "লঞ্চ করার পর আপনারা কি সাপোর্ট প্রদান করেন?",
      a: lang === "en"
        ? "Yes, we provide 30 days of free technical support to fix any bugs and ensure everything is running smoothly."
        : "হ্যাঁ, আমরা ৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট দিই যাতে কোনো বাগ থাকলে তা ফিক্স করা যায় এবং সবকিছু ঠিকঠাক চলে।",
    },
    {
      q: lang === "en" ? "Will my website be mobile-friendly?" : "আমার ওয়েবসাইটটি কি মোবাইল-ফ্রেন্ডলি হবে?",
      a: lang === "en"
        ? "Absolutely. Every project we build is 'Mobile-First,' ensuring a seamless experience on all devices."
        : "অবশ্যই। আমাদের প্রতিটি প্রজেক্ট 'মোবাইল-ফার্স্ট' পদ্ধতিতে তৈরি করা হয়, যা সব ডিভাইসে চমৎকার অভিজ্ঞতা নিশ্চিত করে।",
    },
    {
      q: lang === "en" ? "Which technologies do you use?" : "আপনারা কোন কোন টেকনোলজি ব্যবহার করেন?",
      a: lang === "en"
        ? "We specialize in modern technologies like React.js, Next.js, and Tailwind CSS for high performance."
        : "আমরা হাই পারফরম্যান্স নিশ্চিত করতে React.js, Next.js এবং Tailwind CSS-এর মতো আধুনিক টেকনোলজি ব্যবহার করি।",
    },
  ];

  const titleText = lang === "en" ? (
    <>Questions <br /> & Answers.</>
  ) : (
    <>প্রশ্ন <br /> ও উত্তর।</>
  );

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
            {titleText}
          </h2>
        </motion.div>

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
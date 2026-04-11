import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();

  const text = {
    badge: lang === "en" ? "Get in Touch" : "যোগাযোগ করুন",
    titleStart: lang === "en" ? "Let's start a " : "চলুন শুরু করি একটি ",
    titleHighlight: lang === "en" ? "Conversation." : "আলাপচারিতা।",
    info: {
      email: {
        label: lang === "en" ? "Email us" : "ইমেল করুন",
        val: "hello@glowave.agency",
      },
      phone: {
        label: lang === "en" ? "Call us" : "কল করুন",
        val: "+880 1700 000000",
      },
      office: {
        label: lang === "en" ? "Office" : "অফিস",
        val: "Banani, Dhaka, Bangladesh",
      },
    },
    cta: {
      title:
        lang === "en" ? "Need a free consultation?" : "ফ্রি কনসালটেশন প্রয়োজন?",
      desc:
        lang === "en"
          ? "Book a 15-minute discovery call to discuss your project requirements."
          : "আপনার প্রজেক্টের প্রয়োজনীয়তা নিয়ে আলোচনা করতে ১৫ মিনিটের একটি কল বুক করুন।",
      btn: lang === "en" ? "Schedule Now" : "শিডিউল করুন",
    },
    form: {
      name: lang === "en" ? "Full Name" : "সম্পূর্ণ নাম",
      email: lang === "en" ? "Email Address" : "ইমেল অ্যাড্রেস",
      subject: lang === "en" ? "Subject" : "বিষয়",
      message: lang === "en" ? "Message" : "বার্তা",
      placeholderName: lang === "en" ? "John Doe" : "আপনার নাম",
      placeholderEmail: lang === "en" ? "john@example.com" : "আপনার ইমেল",
      placeholderMsg:
        lang === "en"
          ? "Tell us about your project..."
          : "আপনার প্রজেক্ট সম্পর্কে বলুন...",
      btn: lang === "en" ? "Send Message" : "মেসেজ পাঠান",
      options:
        lang === "en"
          ? ["Web Development", "UI/UX Design", "Branding", "Other"]
          : ["ওয়েব ডেভেলপমেন্ট", "UI/UX ডিজাইন", "ব্র্যান্ডিং", "অন্যান্য"],
    },
  };

  return (
    <div className="bg-[#F8FAFF] pt-10 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block italic">
            {text.badge}
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            {text.titleStart} <br />{" "}
            <span className="text-brand-blue">{text.titleHighlight}</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    {text.info.email.label}
                  </p>
                  <h4 className="text-xl font-bold text-slate-900">
                    {text.info.email.val}
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    {text.info.phone.label}
                  </p>
                  <h4 className="text-xl font-bold text-slate-900">
                    {text.info.phone.val}
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    {text.info.office.label}
                  </p>
                  <h4 className="text-xl font-bold text-slate-900">
                    {text.info.office.val}
                  </h4>
                </div>
              </div>
            </div>

            {/* Consultation CTA Card */}
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <MessageSquare className="text-blue-500 mb-6" size={40} />
                <h3 className="text-2xl font-black mb-4 tracking-tight">
                  {text.cta.title}
                </h3>
                <p className="text-slate-400 mb-8 font-medium">
                  {text.cta.desc}
                </p>
                <button className="px-8 py-4 bg-blue-600 hover:bg-white hover:text-slate-900 rounded-full font-black text-sm uppercase tracking-widest transition-all">
                  {text.cta.btn}
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[80px]" />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl shadow-blue-500/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                    {text.form.name}
                  </label>
                  <input
                    type="text"
                    placeholder={text.form.placeholderName}
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                    {text.form.email}
                  </label>
                  <input
                    type="email"
                    placeholder={text.form.placeholderEmail}
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                  {text.form.subject}
                </label>
                <select className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900 appearance-none">
                  {text.form.options.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                  {text.form.message}
                </label>
                <textarea
                  rows="5"
                  placeholder={text.form.placeholderMsg}
                  className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900 resize-none"
                ></textarea>
              </div>

              <button className="w-full py-6 bg-slate-900 hover:bg-blue-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group">
                {text.form.btn}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Optional: Embedded Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-32 h-[500px] w-full rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-slate-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.42528741362!2d90.4000!3d23.7947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15f40393%3A0xf64f5263a23337a4!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1647425123456!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

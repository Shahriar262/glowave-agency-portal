import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#F8FAFF] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block italic">Get in Touch</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Let's start a <br /> <span className="text-slate-300">Conversation.</span>
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
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email us</p>
                  <h4 className="text-xl font-bold text-slate-900">hello@glowave.agency</h4>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call us</p>
                  <h4 className="text-xl font-bold text-slate-900">+880 1700 000000</h4>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Office</p>
                  <h4 className="text-xl font-bold text-slate-900">Banani, Dhaka, Bangladesh</h4>
                </div>
              </div>
            </div>

            {/* Consultation CTA Card */}
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <MessageSquare className="text-blue-500 mb-6" size={40} />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Need a free consultation?</h3>
                <p className="text-slate-400 mb-8 font-medium">Book a 15-minute discovery call to discuss your project requirements.</p>
                <button className="px-8 py-4 bg-blue-600 hover:bg-white hover:text-slate-900 rounded-full font-black text-sm uppercase tracking-widest transition-all">
                  Schedule Now
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Subject</label>
                <select className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900 appearance-none">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Branding</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
                <textarea rows="5" placeholder="Tell us about your project..." className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-900 resize-none"></textarea>
              </div>

              <button className="w-full py-6 bg-slate-900 hover:bg-blue-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0658421453265!2d90.40050857592477!3d23.78062018805727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70bda04987f%3A0x8898939c32df077b!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1712412345678!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
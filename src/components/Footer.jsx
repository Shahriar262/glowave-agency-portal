import React from "react";
import { Link } from "react-router";
import LogoImage from "../assets/logo-1.png";
import { FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-6 pb-12 mt-20">
      <div className="max-w-7xl mx-auto border border-base-200 rounded-[2.5rem] bg-base-100 shadow-sm overflow-hidden">
        <div className="footer p-10 lg:p-12 text-base-content flex flex-col md:flex-row justify-between items-start">
          
          {/* Logo & Info Section */}
          <aside className="flex flex-col items-start max-w-xs -mt-8 md:-mt-10">
            <Link to="/" className="inline-block">
              <img 
                src={LogoImage} 
                alt="Logo" 
                className="h-38 md:h-40 object-contain -ml-4 -mb-10" 
              />
            </Link>
            
            <p className="text-sm font-medium opacity-70 leading-relaxed pl-2">
              Crafting premium digital experiences with a focus on high-end design and modern SaaS aesthetics.
            </p>

            <div className="flex gap-3 mt-8 pl-2">
              <a href="#" className="btn btn-ghost btn-circle btn-sm border border-base-200 hover:text-brand-blue transition-all">
                <FaXTwitter size={14} />
              </a>
              <a href="#" className="btn btn-ghost btn-circle btn-sm border border-base-200 hover:text-brand-blue transition-all">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="btn btn-ghost btn-circle btn-sm border border-base-200 hover:text-brand-blue transition-all">
                <FaYoutube size={14} />
              </a>
            </div>
          </aside>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 w-full md:w-auto md:ml-auto mt-12 md:mt-6">
            <nav className="flex flex-col gap-3">
              <h6 className="footer-title opacity-40 text-[10px] tracking-[0.2em] mb-3 uppercase">Services</h6>
              <Link to="/services" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Branding</Link>
              <Link to="/services" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">UI/UX Design</Link>
              <Link to="/services" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Web Dev</Link>
            </nav>
            
            <nav className="flex flex-col gap-3">
              <h6 className="footer-title opacity-40 text-[10px] tracking-[0.2em] mb-3 uppercase">Company</h6>
              <Link to="/blog" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Insights</Link>
              <Link to="/contact" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Contact</Link>
              <Link to="/contact" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Careers</Link>
            </nav>

            <nav className="flex flex-col gap-3 col-span-2 md:col-span-1 border-t md:border-t-0 pt-8 md:pt-0 border-base-200">
              <h6 className="footer-title opacity-40 text-[10px] tracking-[0.2em] mb-3 uppercase">Legal</h6>
              <Link to="#" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Terms of use</Link>
              <Link to="#" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Privacy policy</Link>
              <Link to="#" className="text-sm font-semibold opacity-70 hover:text-brand-blue transition-colors">Cookie policy</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="bg-base-200/30 px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-base-200">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            © 2026 GLOWAVE AGENCY — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            <span>Dhaka, BD</span>
            <span className="text-brand-blue">Online 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
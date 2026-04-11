import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import LogoImage from "../assets/logo-1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = {
    home: lang === "en" ? "Home" : "হোম",
    services: lang === "en" ? "Services" : "সার্ভিস",
    blog: lang === "en" ? "Blog" : "ব্লগ",
    about: lang === "en" ? "About" : "আমাদের সম্পর্কে",
    contact: lang === "en" ? "Contact" : "যোগাযোগ",
    hire: lang === "en" ? "Hire Us" : "হায়ার করুন",
  };

  const navItemClass = ({ isActive }) =>
    isActive ? "text-[#0062bd] text-base font-bold" : "font-medium text-base";

  return (
    <div
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${isScrolled ? "pt-4 px-4" : "pt-0 px-0"}`}
    >
      <div
        className={`navbar max-w-7xl mx-auto transition-all duration-500 ${isScrolled ? "bg-base-100/90 backdrop-blur border border-base-200 shadow-lg rounded-2xl py-2 px-6" : "bg-transparent py-4 px-2"}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
            >
              <li>
                <NavLink to="/">{menu.home}</NavLink>
              </li>
              <li>
                <NavLink to="/services">{menu.services}</NavLink>
              </li>
              <li>
                <NavLink to="/blog">{menu.blog}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{menu.about}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{menu.contact}</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost hover:bg-transparent px-0 ml-[-8px] md:ml-0"
          >
            <img
              src={LogoImage}
              alt="Logo"
              className="h-38 md:h-40 object-contain"
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink to="/" className={navItemClass}>
                {menu.home}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navItemClass}>
                {menu.services}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navItemClass}>
                {menu.blog}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navItemClass}>
                {menu.about}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navItemClass}>
                {menu.contact}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 md:gap-4">
          {/* Language Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 scale-90 md:scale-100">
            {["en", "bn"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded-md text-[10px] font-black transition-all ${
                  lang === l
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hire Us Button - Fixed for Mobile */}
          <Link
            to="/contact"
            className="btn bg-brand-blue text-white btn-sm md:btn-md rounded-xl px-4 md:px-8 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg flex"
          >
            {menu.hire}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

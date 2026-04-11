import React from "react";
import { Link, NavLink } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import LogoImage from "../assets/logo-1.png";

const Navbar = () => {
  const { lang, setLang } = useLanguage();

  const menu = {
    home: lang === "en" ? "Home" : "হোম",
    services: lang === "en" ? "Services" : "সার্ভিস",
    blog: lang === "en" ? "Blog" : "ব্লগ",
    about: lang === "en" ? "About" : "আমাদের সম্পর্কে",
    contact: lang === "en" ? "Contact" : "যোগাযোগ",
    hire: lang === "en" ? "Hire Us" : "হায়ার করুন",
  };

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-[#0062bd] text-base font-bold bg-transparent"
      : "font-medium text-base text-slate-700 hover:text-blue-700 bg-transparent";

  return (
    <div className="fixed top-0 z-[100] w-full pt-4 px-4">
      <div className="navbar max-w-7xl mx-auto bg-white backdrop-blur-md border border-slate-200 shadow rounded-2xl py-2 px-4 md:px-6">
        {/* Navbar Start */}
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl mt-3 w-52 p-4 shadow-xl border border-slate-50 font-bold z-[1]"
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
              className="h-32 md:h-40 object-contain"
            />
          </Link>
        </div>

        {/* Navbar Center */}
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
          <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100 scale-90 md:scale-100">
            {["en", "bn"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                  lang === l
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hire Us Button */}
          <Link
            to="/contact"
            className="btn bg-blue-600 hover:bg-blue-700 text-white border-none btn-sm md:btn-md rounded-xl px-4 md:px-8 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-md flex"
          >
            {menu.hire}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

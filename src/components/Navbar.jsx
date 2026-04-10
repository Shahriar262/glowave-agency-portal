import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import LogoImage from "../assets/logo-1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-[100] w-full transition-all duration-500 
      ${isScrolled ? "pt-4 px-4" : "pt-0 px-0"}`}
    >
      <div
        className={`navbar max-w-7xl mx-auto transition-all duration-500 
        ${
          isScrolled
            ? "bg-base-100/90 backdrop-blur border border-base-200 shadow-lg rounded-2xl py-2 px-6"
            : "bg-transparent py-4 px-2"
        }`}
      >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
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

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#0062bd] text-base font-bold" : "font-medium text-base"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-[#0062bd] text-base font-bold" : "font-medium text-base"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-[#0062bd] font-bold text-base" : "font-medium text-base"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#0062bd] font-bold text-base" : "font-medium text-base"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <Link
            to="/contact"
            className="btn btn-neutral btn-md rounded-xl px-8 text-xs font-bold uppercase tracking-widest shadow-lg"
          >
            Hire Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
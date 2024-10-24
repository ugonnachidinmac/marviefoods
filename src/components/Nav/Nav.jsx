import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import handburger from "../../assets/handburger.svg";
import clsburgerdesktop from "../../assets/clsburgerdesktop.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-wrap gap-[20px] justify-between items-center bg-white px-4 py-2 font-'Red Hat Display' w-full overflow-hidden">
        {/* Logo Section */}
        <div className="flex justify-center gap-[8px] items-center logo">
          <img src={logo} alt="Logo" className="w-[35.36px] h-[35.36px]" />
          <p className="text-[18px] lg:text-[26px] font-bold whitespace-nowrap w-[166px]">
            Marvie Foods
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="optionsDesktop hidden lg:flex">
          <ul className="flex justify-center items-center space-x-2">
            <li>
              <Link
                to="/home"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-[#FF8C00] focus:text-[#FF8C00] px-4 py-2 transition"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/meal"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/questions"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="bg-[#FF8C00] text-white font-[24px] text-semibold px-4 py-2 rounded-[10px] transition w-[140px] h-[50px]">
                Sign in
              </button>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex justify-center items-center gap-[20px]">
          <button className="bg-[#FF8C00] hidden md:block text-white px-4 py-2 rounded-[10px]  transition w-[140px] h-[50px]">
            Sign in
          </button>
          <img
            src={handburger}
            alt="Menu"
            className="handburgerIcon w-[35px] h-[35px] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`dropMenu absolute lg:hidden z-[100000000] top-0 pt-[20px] pb-[30px] right-0 w-[274px] bg-white rounded-tl-[10px] rounded-bl-[10px] flex flex-col items-center justify-center gap-6 text-base font-medium transition-all duration-300 ${
            isMenuOpen ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-full hidden"
          }`}
        >
          <div>
            {/* Close Icon */}
            <img
              src={clsburgerdesktop}
              className="closeIcon pl-[190px] pr-[50px] cursor-pointer "
              alt="Close Menu"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col justify-center items-center space-y-4">
            <li>
              <Link
                to="/home"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-[#FF8C00] focus:text-[#FF8C00] px-4 py-2 transition"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-[#FF8C00] focus:text-[#FF8C00] px-4 py-2 transition"
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-[#FF8C00] focus:text-[#FF8C00] px-4 py-2 transition"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-[#FF8C00] whitespace-nowrap focus:text-[#FF8C00] px-4 py-2 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="bg-[#FF8C00] text-white px-4 py-2 rounded-[10px] hover:bg-[#A77E26] transition w-[140px] h-[50px]">
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

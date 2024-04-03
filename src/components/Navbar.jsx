import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
// react icons
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 left-0 right-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="inline-block items-center"
              />
            </a>
            {/* Navbar Links */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer "
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* Language and Sign Up Button */}
          <div className="space-x-12 hidden md:flex items-center ">
            <a href="" className="hidden lg:flex items-center ">
              <GrLanguage className="mr-2" />
              <span className="hover:text-secondary">Language</span>
            </a>
            <button className="bg-secondary py-2 px-4  transition-all duration-300 rounded-full hover:text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>
          {/*Toggle Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-primary text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block text-white hover:text-secondary"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;

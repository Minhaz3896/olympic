import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ paddingTop: "", width: "100px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <>
          <li>
            {" "}
            <ScrollLink to="home" spy={true} smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="partners" smooth={true} duration={500}>
              Partners
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="Try" smooth={true} duration={500}>
              Catalog
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </>
      </ul>

      {/* Hamburger */}

      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen opacity-95 bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </ScrollLink>
        </li>

        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="about"
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </ScrollLink>
        </li>

        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="partners"
            smooth={true}
            offset={50}
            duration={500}
          >
            Partners
          </ScrollLink>
        </li>

        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="catalog"
            smooth={true}
            offset={50}
            duration={500}
          >
            Catalog
          </ScrollLink>
        </li>

        <li className="py-6 text-4xl">
          <ScrollLink
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

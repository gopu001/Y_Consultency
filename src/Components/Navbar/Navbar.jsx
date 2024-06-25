import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Navbar1.scss";
// import logo from "../../assets/Logo/black-logo.png";
import logo from "../../assets/Logo/navbar.png"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const navData = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "About",
  },
  {
    id: 3,
    link: "Services",
  },
  {
    id: 4,
    link: "Our Works",
  },
  {
    id: 5,
    link: "Contact",
  },
];

const variants = {
  hidden: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <section className="navbar1">
      <div className="navContainer">
        <div className="logo">
          <Link to="Home" smooth={true} duration={1300} onClick={closeNav}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <ul>
          {navData.map(({ id, link }) => (
            <li key={id}>
              <Link to={link} smooth={true} duration={1300} onClick={closeNav}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hamBurger" onClick={toggleNav}>
          {nav ? <IoClose /> : <IoMenu />}
          <AnimatePresence>
            {nav && (
              <motion.ul
                className="mobileNav"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navData.map(({ id, link }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      smooth={true}
                      duration={1300}
                      onClick={closeNav}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

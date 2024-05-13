import React from "react";
import { Link } from "react-scroll"
import { useState } from "react";
import "./Navbar1.scss";
import logo from "../../assets/Logo/black-logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


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

          {nav && (
            <ul className="mobileNav">
              {navData.map(({ id, link }) => (
                <li key={id}>
                  <Link to={link} smooth={true} duration={1300} onClick={closeNav}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
    </section>
  );
}

export default Navbar;

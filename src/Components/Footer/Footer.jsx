import React from 'react'
import './Footer.scss'
// import phoneImg from '../../assets/Contact/call.svg'
// import mailImg from '../../assets/Contact/email.svg'
// import instaImg from '../../assets/Contact/insta.png'
import { FaInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
        <div className="childFooter">
          <div className="allFooters">
      <div className="footer_1">
        <div className="footerAbout">
        <h2>Y-Solutions</h2>
        <p>
        Welcome to Y - Solutions, your one-stop solution for transitioning your business from <span>Offline</span> to <span> Online</span>. We offer website design, development, logo creation, content writing, and digital marketing to elevate your brand.</p>
        <p>Copyright © 2023 Y-Solutions. All rights reserved.</p>
        </div>
      </div>
      <div className="footer_2">
        <div className="footerServices">
            <h2>Services</h2>
            <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Logo Design</li>
                <li>Poster Making</li>
                <li>Content Writing</li>
                <li>Digital Marketing</li>
                <li>Advertisements</li>
            </ul>
        </div>
      </div>
      <div className="footer_3">
        <div className="footerContact">
            <h2>Contact</h2>
            <div className="contactChild">
            <div className="subContact">
               <IoCallOutline/>
               <p><a href="tel:+918186838735">+91 8186838735</a></p>
            </div>
            <div className="subContact">
               <CiMail/>
                <p><a href="mailto:enquiries@y-solutions.in">enquiries@y-solutions.in</a></p>
            </div>
            <div className="subContact">
            <FaWhatsapp/>
                <p><a href="https://wa.me/8186838735" target='_blank'>Start a Chat</a></p>
            </div>
            <div className="subContact">
            <FaLinkedin/>
                <p><a href="https://www.linkedin.com/in/y-solutions-a4566a315/" target='_blank'>LinkedIn</a></p>
            </div>
            <div className="subContact">
            <FiTwitter/>
                <p><a href="https://x.com/ysolutions0101" target='_blank'>Twitter</a></p>
            </div>
            
            </div>
        </div>
      </div>
      <div className="footer_4">
        <div className="quickLinks">
            <h2>Quick Links</h2>
            <div className="allLinks">
            <p><a href="#Home">Home</a></p>
            <p><a href="#About">About</a></p>
            <p><a href="#Services">Services</a></p>
            <p><a href="#Project">Our Works</a></p>
            <p><a href="#Testimonials">Testimonials</a></p>
            <p><a href="#Contact">Contact</a></p>
            </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer

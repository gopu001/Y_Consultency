import React from "react";
import "./About.scss";
import aboutImg from "../../assets/About/about3.png";

function About() {
  return (
    <section name="About" className="aboutParent">
      <div className="aboutChild">
    <div className="upperPart">
      <h2>  <span>WHO WE ARE</span> </h2>
    </div>
    <div className="lowerPart">
    <div className="lowerLeft">
      <h2>We Help To Get You <span>Online.</span></h2>
      <p>
      "Welcome to Y - Solutions, your premier destination for comprehensive consultancy services. With an unwavering commitment to excellence, we offer a spectrum of solutions tailored to elevate your brand presence and drive unparalleled success. From captivating website design and dynamic development to eye-catching logo and poster creation, our team of experts delivers unparalleled craftsmanship in every project. Harnessing the power of persuasive content writing and cutting-edge digital marketing strategies, we propel your brand to the forefront of the digital landscape. Let us be your partner in growth, as we craft compelling advertisements that resonate with your target audience and ignite lasting connections. At Y - Solutions, we don't just meet expectations; we exceed them, forging a path to unparalleled success for your business."
          </p>
    </div>
    <div className="lowerRight">
    <img src={aboutImg} alt="Its an image indication about page." />
    </div>
    </div>

      </div>
    </section>
  );
}

export default About;

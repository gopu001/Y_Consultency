import React from "react";
import "./About.scss";
import aboutImg from "../../assets/About/about3.png";

function About() {
  return (
    <section className="aboutParent">
      <div className="aboutChild">
    <div className="upperPart">
      <h1>  <span>WHO WE ARE</span> </h1>
    </div>
    <div className="lowerPart">
    <div className="lowerLeft">
      <h2>We Help To Get You <span>Online.</span></h2>
      <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            quidem aspernatur totam veritatis iusto laborum hic ullam? Nostrum
            facilis laudantium ad quod deserunt minus, impedit illum totam eius
            repudiandae nesciunt.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.Nostrum
            facilis laudantium ad quod deserunt minus, impedit illum totam eius
            repudiandae nesciunt.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
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

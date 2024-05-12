import React from "react";
// import "./Services.scss";
import './Services1.scss'
import design from "../../assets/Services/WebDesign.png";
import development from "../../assets/Services/Development.png";
import logoDesign from "../../assets/Services/logoDesign1.png";
import poster from "../../assets/Services/poster.png";
import content from "../../assets/Services/contentWriter.png";
import digital from "../../assets/Services/digitalMarketing.png";
import advertisement from "../../assets/Services/advertisement.png";
import arrow from "../../assets/Services/arrow.png";

const serviceData = [
  {
    id: 1,
    img: design,
    head: "Website Design",
    desc: "Our expert team crafts visually stunning websites tailored to your brand, ensuring user-friendly navigation and seamless functionality, delivering a captivating online presence that resonates with your audience.",
    scroll: "Scroll down",
    arrowImg: arrow,
  },
  {
    id: 2,
    img: development,
    head: "Website Development",
    desc: " With cutting-edge technologies and meticulous attention to detail, we build robust, scalable websites that engage users and drive conversions, empowering your business with a strong digital foundation for growth.",
    scroll: "Scroll Down",
    arrowImg: arrow,
  },
  {
    id: 3,
    img: logoDesign,
    head: "Logo Design",
    desc: "Our creative designers conceptualize unique logos that capture your brand identity, evoking trust and recognition across all channels, leaving a lasting impression and setting you apart in competitive markets.",
    scroll: "Scroll Down",
    arrowImg: arrow,
  },
  {
    id: 4,
    img: poster,
    head: "Poster Making",
    desc: " Transform your message into eye-catching visuals with our captivating poster designs, strategically crafted to grab attention and convey information effectively, driving engagement and sparking interest in your offerings.",
    scroll: "Scroll Down",
    arrowImg: arrow,
  },
  {
    id: 5,
    img: content,
    head: "Content Writing",
    desc: " Elevate your brand voice with compelling content crafted by our talented writers, delivering engaging narratives, persuasive copy, and informative articles that resonate with your target audience and drive action.",
    scroll: "Scroll Down",
    arrowImg: arrow,
  },
  {
    id: 6,
    img: digital,
    head: "Digital Marketing",
    desc: " Harness the power of digital channels with our comprehensive marketing strategies, tailored to your goals and audience, leveraging social media, and analytics to drive growth and maximize Return Of Income.",
    scroll: "Scroll Down",
    arrowImg: arrow,
  },
  {
    id: 7,
    img: advertisement,
    head: "Advertisements",
    desc: "Maximize your reach and impact with our innovative ad campaigns, strategically designed to target your audience across various platforms, delivering compelling messages that drive conversions and boost brand awareness.",
    scroll: "Scroll Down",
    arrowImg: arrow,
  },
];

function Services() {
  return (
    <section className="services">
      <div className="servicesMainContainer">
        <div className="serviceSub">
        <h2>Our Services</h2>
        <div className="serviceGridCards">
          {serviceData.map(({ id, img, head, desc, scroll, arrowImg }) => (
            <div key={id} className="serviceCards">
              <div className="serviceCard">
                <img src={img} alt="" />
                <div className="serviceText">
                  <h1>{head}</h1>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Services;

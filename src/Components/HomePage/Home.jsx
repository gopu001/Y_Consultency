import React, { useEffect } from "react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import homeLogo from "../../assets/Logo/logo_transparent.png";
import "./Home1.scss"
import Aos from "aos";
import 'aos/dist/aos.css'

function Home() {

   useEffect(() => {
    Aos.init({ duration: 2000 });
   },[])

  const [text] = useTypewriter({
    words: ["Website's", "Logo's", "Poster's", "Content Writing"],
    loop: 0,
    speed: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  })

  return (
    <section name="Home" className="home">
      <div className="wrapper">
        <div className="homeLeft" data-aos="fade-right" data-aos-anchor-placement="center-bottom" >
          <h3>Designing The Future;</h3>
          <h2>{text}.</h2>
          <h3>Your Vision, Our Passion:</h3>
        </div>
        <div className="homeRight" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
          <img src={homeLogo} alt="" />
        </div>
      </div>
     
    </section>
  );
}

export default Home;

import React from "react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import homeLogo from "../../assets/Logo/logo_transparent.png";
import "./Home.scss";

function Home() {
  const [text] = useTypewriter({
    words: ["Website's", "Logo's", "Poster's"],
    loop: 0,
    speed: 0,
  })

  return (
    <section className="home">
      <div className="wrapper">
        <div className="homeLeft">
          <h3>Designing The Future;</h3>
          <h2>{text}.</h2>
          <h3>Your Vision, Our Passion:</h3>
        </div>
        <div className="homeRight">
          <img src={homeLogo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;

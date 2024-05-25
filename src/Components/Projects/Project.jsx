import react, { component, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Project.scss'
// import './Project1.scss'
import project1 from '../../assets/Projects/project1.png'
import project2 from '../../assets/Projects/project2.png'
import project3 from '../../assets/Projects/project3.png'
import project4 from '../../assets/Projects/project4.png'
import project5 from '../../assets/Projects/project5.png'
import Aos from 'aos';
import 'aos/dist/aos.css';


const projectData = [
  
  {
    id:1,
    img:project1,
    projectName:"InOrbit Immigration",
    desc:"It is a website related to immigration services. Typically, such websites offer assistance and information to individuals and families looking to immigrate to another country",
    button:"Website Link",
    link: "https://inorbitimmigration.com/",
  },
  {
    id:2,
    img:project2,
    projectName:"SAO",
    desc:"This is a website for Organization where it provides support to disadvantaged refugees, asylum seekers and other migrants across Sheffield City and Near by areas in UK across Sheffield City.",
    link: "https://sao.org.uk/",
  },
  {
    id:3,
    img:project3,
    projectName:"MEDIDOCX",
    desc:"It is website related to medical where they can interpret complex medical reports and convert them into simple formats that are easily understandable by physicians, doctors, or even common people.",
    link: "https://medidocx.com/#",
  },
  {
    id:4,
    img:project4,
    projectName:"CLEARVIEW",
    desc:"It is a website for International Education Consultancy where they provide need-based solutions to the students who want to study in Canada to advance their careers",
    link: "https://clearviewinternationaleducation.com/",
  },
  {
    id:5,
    img:project5,
    projectName:"RISHITHA HEALTH CARE",
    desc:"It is a HealthCare website with a mission to deliver healthcare products to all, especially to the growing and ageing communities. ",
    link: "https://rishitahealthcare.com/",
  },
]


function Project(){


useEffect(() => {
  Aos.init({ duration: 2000 });
}, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section name="Our Works" className="project">
       <div className="projectMainContainer">
        <h2 data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">Our Works</h2>
        <div className="projectCards">
          <Slider {...settings}>          
          {
            projectData.map(({id,img,projectName,desc,button,link}, index) => (
              <div key={id} className="projectCard" data-aos = {index % 2 == 0 ? "flip-right" : "flip-left"} >
                <div className="eachCard">
                <img src={img} alt="" />
                <div className="projectText">
                  <h3>{projectName}</h3>
                  <p>{desc}</p>
                  <a href={link} target='_blank' >Click here</a>
                </div>
                </div>
              </div>
            ))
          }
          </Slider>
        </div>
       </div>
    </section>
  )
}

export default Project;
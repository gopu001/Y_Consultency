import react, { component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Project.scss'
import project1 from '../../assets/Projects/project.png'



const projectData = [
  
  {
    id:1,
    img:project1,
    projectName:"BEEJ",
    desc:"The sun rose, birds sang, and life embraced another beautiful day.The sun rose, birds sang, and life embraced another beautiful day.",
    button:"Website Link",
    link: "hi",
  },
  {
    id:2,
    img:project1,
    projectName:"BEEJ",
    desc:"The sun rose, birds sang, and life embraced another beautiful day.The sun rose, birds sang, and life embraced another beautiful day.",
    link: "hi",
  },
  {
    id:3,
    img:project1,
    projectName:"BEEJ",
    desc:"The sun rose, birds sang, and life embraced another beautiful day.The sun rose, birds sang, and life embraced another beautiful day.",
    link: "hi",
  },
  {
    id:4,
    img:project1,
    projectName:"BEEJ",
    desc:"The sun rose, birds sang, and life embraced another beautiful day.",
    link: "hi",
  },
  {
    id:5,
    img:project1,
    projectName:"BEEJ",
    desc:"The sun rose, birds sang, and life embraced another beautiful day.",
    link: "hi",
  },
  {
    id:6,
    img:project1,
    projectName:"BEEJ",
    desc:"The sun rose, birds sang, and life embraced another beautiful day.",
    link: "hi",
  },
]


function Project(){




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
    <section className="project">
       <div className="projectMainContainer">
        <h2>Our Works</h2>
        <div className="projectCards">
          <Slider {...settings}>          
          {
            projectData.map(({id,img,projectName,desc,button,link}) => (
              <div key={id} className="projectCard">
                <div className="eachCard">

               
                <img src={img} alt="" />
                <div className="projectText">
                  <h3>{projectName}</h3>
                  <p>{desc}</p>
                  <a href={link}>Click here</a>

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
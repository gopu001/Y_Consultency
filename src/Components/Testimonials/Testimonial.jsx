import React, { component } from 'react'
import './Testimonial.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from '../../assets/Testimonials/test1.jpg'
import test2 from '../../assets/Testimonials/test2.jpg'
import test3 from '../../assets/Testimonials/test3.jpg'
import test4 from '../../assets/Testimonials/test4.jpg'
import test5 from '../../assets/Testimonials/test5.jpg'

const testimonialData = [
    {
        id:1,
        img:test1,
        name:"Jon Snow",
        position:"Director",
        desc:"Game of Thrones based on George R.R. Martin's epic fantasy series A Song of Ice and Fire chronicles the power struggles among noble families vying for control of the Iron Throne of the Seven Kingdoms. Set in the fictional continents of Westeros and Essos, the series intertwines intricate political intrigue, epic battles, and supernatural elements, including dragons and White Walkers",
    },
    {
        id:2,
        img:test2,
        name:"Tyrion Lannister",
        position:"Director",
        desc:"Game of Thrones based on George R.R. Martin's epic fantasy series A Song of Ice and Fire chronicles the power struggles among noble families vying for control of the Iron Throne of the Seven Kingdoms. Set in the fictional continents of Westeros and Essos, the series intertwines intricate political intrigue, epic battles, and supernatural elements, including dragons and White Walkers",
    },
    {
        id:3,
        img:test3,
        name:"Jamie Lannister",
        position:"Director",
        desc:"Game of Thrones based on George R.R. Martin's epic fantasy series A Song of Ice and Fire chronicles the power struggles among noble families vying for control of the Iron Throne of the Seven Kingdoms. Set in the fictional continents of Westeros and Essos, the series intertwines intricate political intrigue, epic battles, and supernatural elements, including dragons and White Walkers",
    },
    {
        id:4,
        img:test4,
        name:"Arya Stark",
        position:"Director",
        desc:"Game of Thrones based on George R.R. Martin's epic fantasy series A Song of Ice and Fire chronicles the power struggles among noble families vying for control of the Iron Throne of the Seven Kingdoms. Set in the fictional continents of Westeros and Essos, the series intertwines intricate political intrigue, epic battles, and supernatural elements, including dragons and White Walkers",
    },
    {
        id:5,
        img:test5,
        name:"Daenerys Targaryen",
        position:"Director",
        desc:"Game of Thrones based on George R.R. Martin's epic fantasy series A Song of Ice and Fire chronicles the power struggles among noble families vying for control of the Iron Throne of the Seven Kingdoms. Set in the fictional continents of Westeros and Essos, the series intertwines intricate political intrigue, epic battles, and supernatural elements, including dragons and White Walkers",
    },
]

function Testimonial () {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        // autoplay: true,
        // speed: 3000,
        // autoplaySpeed: 3000,
        // cssEase: "linear",
        pauseOnHover:true,
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
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

    return (

        <div className='testimonial'>
         <div className="testimonialMainContainer">
          <h2>What Our Clients Say.</h2>
            <div className="testimonialCards">
                <Slider {...settings}>
                {
                    testimonialData.map(({id,img,name,position,desc}) => (
                        <div key={id} className="testimonialCard">
                          <div className="eachTestimonialCard">
                            <div className="testimonialUpperPart">
                              <img src={img} alt="" />
                              <div className="testimonialInfo">
                                <h3>{name}</h3>
                                <h4>{position}</h4>
                              </div>
                            </div>
                            <div className="testimonialDownPart">
                              <p>{desc}</p>
                            </div>
                          </div>
                          
                        </div>
                    ))
                }
                </Slider>
            </div>

         </div>
        </div>
    )
}

export default Testimonial
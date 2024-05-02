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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // variableWidth: true
      };
    

    return (

        <div className='testimonial'>
          <div className="testimonialMainContainer">
            <h2>What Our Clients Say</h2>
            <div className="xyz">
            <div className="testimonialCards">
                <Slider {...settings}>
                {
                    testimonialData.map(({id,img,name}) => (
                        <div key={id} className="testimonialCard">
                            <img src={img} alt="" /> 
                        </div>
                    ))
                }
                </Slider>
            </div>
            </div>
          </div>
        </div>
    )
}

export default Testimonial
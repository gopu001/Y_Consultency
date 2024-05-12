import react from 'react'
import './Testimonials.scss'
import Marquee from 'react-fast-marquee'
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
        desc:"Working with Y-Solutions was an absolute pleasure! From the initial consultation to the final delivery of my immigration consultancy website, they demonstrated professionalism, expertise, and a genuine commitment to my vision. Their attention to detail ensured that every aspect of the website accurately represented the services I offer and the experience I aim to provide to my clients. I highly recommend Y_Solutions to anyone seeking a seamless and effective solution for their online presence in the field of immigration consultancy. Thank you for helping me bring my vision to life!",
    },
    {
        id:2,
        img:test2,
        name:"Tyrion Lannister",
        position:"Director",
        desc:"Working with Y-Solutions was an absolute pleasure! From the initial consultation to the final delivery of my immigration consultancy website, they demonstrated professionalism, expertise, and a genuine commitment to my vision. Their attention to detail ensured that every aspect of the website accurately represented the services I offer and the experience I aim to provide to my clients. I highly recommend Y_Solutions to anyone seeking a seamless and effective solution for their online presence in the field of immigration consultancy. Thank you for helping me bring my vision to life!",
    },
    {
        id:3,
        img:test3,
        name:"Jamie Lannister",
        position:"Director",
        desc:"Working with Y-Solutions was an absolute pleasure! From the initial consultation to the final delivery of my immigration consultancy website, they demonstrated professionalism, expertise, and a genuine commitment to my vision. Their attention to detail ensured that every aspect of the website accurately represented the services I offer and the experience I aim to provide to my clients. I highly recommend Y_Solutions to anyone seeking a seamless and effective solution for their online presence in the field of immigration consultancy. Thank you for helping me bring my vision to life!",
    },
    {
        id:4,
        img:test4,
        name:"Arya Stark",
        position:"Director",
        desc:"Working with Y-Solutions was an absolute pleasure! From the initial consultation to the final delivery of my immigration consultancy website, they demonstrated professionalism, expertise, and a genuine commitment to my vision. Their attention to detail ensured that every aspect of the website accurately represented the services I offer and the experience I aim to provide to my clients. I highly recommend Y_Solutions to anyone seeking a seamless and effective solution for their online presence in the field of immigration consultancy. Thank you for helping me bring my vision to life!",
    },
    {
        id:5,
        img:test5,
        name:"Daenerys Targaryen",
        position:"Director",
        desc:"Working with Y-Solutions was an absolute pleasure! From the initial consultation to the final delivery of my immigration consultancy website, they demonstrated professionalism, expertise, and a genuine commitment to my vision. Their attention to detail ensured that every aspect of the website accurately represented the services I offer and the experience I aim to provide to my clients. I highly recommend Y_Solutions to anyone seeking a seamless and effective solution for their online presence in the field of immigration consultancy. Thank you for helping me bring my vision to life!",
    },
]


function Testimonials() {

    return (
       <section className="testimonials">
        <div className="testimonialsMainContainer">
            <h2>What Our Clients Say.</h2>
            <div className="testimonialsCards">
                <Marquee speed={30}>  
                    {
                          testimonialData.map(({id,img,name,position,desc}) => (
                            <div key={id} className="testimonialsCard">
                              <div className="eachTestimonialsCard">
                                <div className="testimonialsUpperPart">
                                  <img src={img} alt="" />
                                  <div className="testimonialsInfo">
                                    <h3>{name}</h3>
                                    <h4>{position}</h4>
                                  </div>
                                </div>
                                <div className="testimonialsDownPart">
                                  <p>{desc}</p>
                                </div>
                              </div>
                              
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>

       </section>
    )
}

export default Testimonials
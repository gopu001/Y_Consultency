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


function Testimonials() {

    return (
       <section className="testimonials">
        <div className="testimonialsMainContainer">
            <h2>What Our Clients Say.</h2>
            <div className="testimonialsCards">
                <Marquee>  
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
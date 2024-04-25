import React from "react";
import './Services.scss'
import design from '../../assets/Services/Design.svg'
import development from '../../assets/Services/Development.svg'
import logo from '../../assets/Services/Design.svg'
import arrow from '../../assets/Services/arrow.png'


const serviceData = [
    {
        id:1,
        img:design,
        head: "Website Design",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum.",
        scroll:"Scroll down to know more",
        arrowImg:arrow,
    },
    {
        id:2,
        img:development,
        head:"Website Development",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum.",
        scroll:"Scroll Down",
        arrowImg:arrow,
    },
    {
        id:3,
        img:logo,
        head: "Logo Design",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna diam. Maecenas commodo sem quis vulputate hendrerit. Donec sollicitudin erat at libero varius dictum.",
        scroll:"Scroll Down",
        arrowImg:arrow,
    }
]

function Services() {
    return (
        <section className="services">
               <h2>Our Services</h2>
        <div className="servicesMainContainer">
         
            {
                serviceData.map(({id, img, head, desc,scroll, arrowImg}) => (
                <div key={id} className="serviceCards">
                    <div className="serviceCard">
                        <img src={img} alt="" />
                        <div className="serviceText">
                        <h1>{head}</h1>
                        <p>{desc}</p>
                        <div className="scroll">
                        <h4>{scroll} </h4>
                        <img src={arrowImg} alt="" />
                        </div>
                       
                        </div>
                      
                    </div>
                </div>

                ))
            }
        </div>
        </section>
    )
}

export default Services;
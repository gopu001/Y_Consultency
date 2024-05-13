import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Projects/Project'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import whatsappImg from '../src/assets/Contact/whatspp.png'

function App() {

  return (
    <>
    <section>
      <Navbar/>
      <Home/>
    </section>
    <section> <About/></section>
    <section> <Services/></section>
    <section><Project/></section>
     <section><Testimonials/></section>
     <section><Contact/></section>

     <div className="reachOut">
     <img src={whatsappImg} alt="" />
        {/* <a href="https://wa.me/+919735712598" target='_blank'> <img src={whatsappImg} alt="" /> </a> */}
        <a href="https://wa.me/+919735712598" target='_blank'>Reach Out to Us</a>
        {/* <p>react out to us</p> */}
      </div>
    </>
  )
}

export default App

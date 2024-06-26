import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Projects/Project'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import whatsappImg from '../src/assets/Contact/whatspp.png'

function App() {

  return (
    <>
    <section id='Home'>
      <Navbar/>
      <Home/>
    </section>
    <section id='About'> <About/></section>
    <section id='Services'> <Services/></section>
    <section id='Project'><Project/></section>
     <section id='Testimonials'><Testimonials/></section>
     <section id='Contact'><Contact/></section>
     <section><Footer/></section>

     <div className="reachOut">
        <a href="https://wa.me/+919735712598" target='_blank'>
        <img src={whatsappImg} alt="" />
          Reach Out to Us
          </a>
      </div>
    </>
  )
}

export default App

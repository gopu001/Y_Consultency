import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Projects/Project'
import './App.css'
import Testimonial from './Components/Testimonials/Testimonial'


function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Project/>
     {/* <Testimonial/> */}
    </>
  )
}

export default App

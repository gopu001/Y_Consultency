import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Projects/Project'
import Testimonials from './Components/Testimonials/Testimonials'


function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Project/>
     {/* <Testimonials/> */}
    </>
  )
}

export default App

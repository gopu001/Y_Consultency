import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Projects/Project'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
    <section>
      <Navbar/>
      <Home/>
    </section>
    <section> <About/></section>
    <section> <Services/></section>
    {/* <section><Project/></section> */}
     {/* <section><Testimonials/></section> */}
     {/* <section><Contact/></section> */}
    </>
  )
}

export default App

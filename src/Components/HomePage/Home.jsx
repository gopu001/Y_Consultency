import React from 'react'
import homeLogo from '../../assets/Logo/logo_transparent.png'
import './Home.scss'

function Home() {
  return (
    <section className='home' >
        <div className="wrapper">     
      <div className="homeLeft">
        <h3>Designing The Future;</h3>
        <h2>Websites.</h2>
        <h3>Your Vision, Our Passion:</h3>
      </div>
      <div className="homeRight">
        <img src={homeLogo} alt="" />
      </div>
      </div>
    </section>
  )
}

export default Home

// import React from 'react'
import Lottie from 'lottie-react';
import './Hero.css'
import Developer from '../../../src/Animations/Animation - 1742494433426.json'

const Hero = () => {
  return (
    <section className='hero flex'>

      <div className='left-section '>
        
        <div className='flex parent-avatar'>
          <img src="/Images/WhatsApp Image 2023-10-31 at 10.11.06_ff805dc6-modified (1).png" alt="" className='avatar'/>
          <h1 className='name '>Fares Mohammed</h1>
          <div className='icon-verified'></div>
        </div>

        <h1 className='title'>Junior Front-End Developer</h1>
        <p className='subtitle'>I’m Fares Mohammed , highly skilled developer with over 1 year experience in HTML, CSS, Javascript and React with experience in REST API’S </p>

        <div className='icons flex'>
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>

      </div>
      <div className='right-section animation '>
        <Lottie className='contact-animation' style={{height: 355}} animationData={Developer}/>

      </div>

    </section>
  )
}

export default Hero;

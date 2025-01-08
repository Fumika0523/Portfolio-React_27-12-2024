import React from 'react'
import './Hero.css'
import Profile_Icon from '../../assets/Profile_Icon.png'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={Profile_Icon} alt="" />
        <h1><span>I'm Fumika Mikami,</span> full stack developer based in Japan.</h1>
        {/* <p>I am a fronted developer from .....</p> */}
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
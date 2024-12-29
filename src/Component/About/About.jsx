import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    {/* <p>I'm Full Stack Solution Architect The crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs), design (working closely with designers), front-end development (React, ReactJs, HTML5, CSS3, Javascript, Responsive, UX),database(MongoDB,Mysql) </p> */}
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    {/* <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div><div className="about-skill"><p>NodeJS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p> MySQL</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivemenet">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivemenet">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
    
  )
}

export default About
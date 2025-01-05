import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import MyWork from './Component/MyWork/MyWork'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <MyWork/>
        <Contact/>
    </div>
  )
}

export default App
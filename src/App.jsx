import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skill from './components/Skills/Skill'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Skill/>
      <Projects/>
    </div>
  )
}

export default App

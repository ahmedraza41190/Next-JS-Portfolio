"use client"
import Image from 'next/image'
import Hero from './component/hero'
import Contact from './component/contact'
import Project from './component/project'
import About from './component/about'
import Skill from './component/skill'
import Particle from './component/particles'
import AnimatedCursor from "react-animated-cursor"
import Cursor from './component/cursor'

export default function Home() {
  return (
    <div className='bg-[#222242]'>
      <Cursor />
      <Particle />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

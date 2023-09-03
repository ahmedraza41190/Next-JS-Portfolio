import Image from 'next/image'
import Hero from './component/hero'
import Contact from './component/contact'
import Project from './component/project'

export default function Home() {
  return (
    <div className='bg-[#222242]'>
      <Hero />
      <Project />
      <Contact />
    </div>
  )
}

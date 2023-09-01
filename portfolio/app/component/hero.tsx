import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-8xl font-[cursive,Comforter] text-[#fff] m-5 bg-initial drop-shadow-[2px_2px_2px_red]">
              Ahmed Raza
            </h1>
            <div className="animation_div " >
              <img
                className="animation_img" width={600}
                src="https://readme-typing-svg.herokuapp.com?size=22&duration=3000&color=31F711&center=true&vCenter=true&height=100&lines=%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%94%A5Passionate+Web+Developer%F0%9F%92%BB;Experience+Seeker%F0%9F%92%AF;Dedicated+to+Work%F0%9F%92%AA%F0%9F%8F%BB;Always+Learning%F0%9F%92%A1;from+Karachi%2C+Pakistan%F0%9F%87%B5%F0%9F%87%B0"
                alt="Typing SVG"
              />
            </div>
            <p className="mb-8 leading-relaxed text-white">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
              tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
              chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              width={350}
              height={350}
              src={require('../../public/assets/picture/WhatsApp Image 2022-02-18 at 7.53.03 PM.jpeg')}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
import Image from 'next/image'
import React from 'react'
import hero from '@/public/hero.jpeg';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={hero}
        alt="bg"
        layout="fill"
        className="object-cover z-0 overflow-x-hidden"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col justify-center h-full md:items-left text-white px-4 md:px-24">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold w-[330px] md:w-[600px]">Your <br/> Travel Guide</h1>
        <p className="font-poppins mt-8 text-base md:text-xl w-[300px] md:w-[500px]">Your journey starts here, let us guide you through every step. Discover top travel packages, exclusive flight deals, and all the services you need to travel stress-free.</p>
        <button type="button" className="py-2.5 px-5 me-2 mt-8 text-sm md:text-base w-[250px] md:w-[300px] text-white focus:outline-none bg-black rounded-full hover:bg-white hover:text-[#ff3131] duration-300 font-poppins font-bold">GET STARTED NOW</button>
      </div>

    </section>
  )
}

export default Hero
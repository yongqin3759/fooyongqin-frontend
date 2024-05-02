"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'


export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-3xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
              Hi There! I'm {" "} 
            </span>
            <br />
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Yong Qin',
                5000, // wait 1s before replacing "Mice" with "Hamsters",
                'Web Developer',
                3000,
                'Computing Grad',
                3000,
                'Aerospace Eng.',
                3000,
                'นักมวย',
                3000,
                'Judoka',
                3000,
                'Derp',
                3000,

                
              ]}
              wrapper="span"
              speed={80}
              repeat={Infinity}
            />

          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I'm on the internet!
          </p>

          <div>
            <button className="px-6 py-3 w-full rounded-full mr-4 text-black bg-white hover:bg-slate-200 sm:width-fit bg-gradient-to-br from-red-400 to-white width-200">Contact Me</button>

            <button className="px-1 py-1 w-full rounded-full hover:bg-slate-800 text-white border mt-3 bg-gradient-to-br from-red-400 to-white">
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
            </div>

          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
              <Image
                src="/images/yongqin-profile.png"
                alt='yongqin'
                width={500}
                height={500}
              />
          </div>

      </div>
    </section>
  )
}
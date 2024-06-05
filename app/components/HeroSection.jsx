"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const RESUME_FILE = './pdfs/Foo Yong Qin Resume.pdf'

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left w-100 pt-10 lg:pl-20 justify-self-start">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-3xl font-extrabold min-h-32">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
              Hi There! I'm{" "}
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
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full mr-4 text-black bg-white hover:bg-slate-200 sm:width-fit bg-gradient-to-br from-red-400 to-white w-full sm:w-fit inline-block"
            >
              Contact Me
            </Link>
            <Link className="px-1 py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 text-white border mt-3 bg-gradient-to-br from-red-400 to-white inline-block" href={RESUME_FILE} download={'Foo Yong Qin Resume.pdf'} target="_blank"
    rel="noopener noreferrer">

              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </Link>
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

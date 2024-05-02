import React from 'react'
import Image from 'next/image'

export const AboutSection = () => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 py-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutme.jpg" width={400} height={500} />
        <div>
          <h2>About Me</h2>
          <p>
          Hey there, I'm Yong Qin, a fusion of aerospace engineering finesse and tech wizardry. Armed with a Master's in Computer Science and a Bachelor's with Honors in Aerospace Engineering, I'm a formidable force. My journey highlights my talent for optimizing systems, slashing code duplication, and crafting stellar user experiences. Fluent in languages like JavaScript and Python, I thrive in frameworks like React and Spring Boot. And when I'm not coding, you'll find me throwing punches in Muay Thai or grappling on the mats in Judo – a coder with a kick!
          </p>
        </div>
      </div>
    </section>
  )
}

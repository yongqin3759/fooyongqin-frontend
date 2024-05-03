"use client"
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>React</li>
        <li>Python</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Masters of Computer Science NUS</li>
        <li>Bachelors of Aerospace Engineering NTU</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Grade 8 Piano ABRSM</li>
        <li>Judo Orange Belt</li>
      </ul>
    )
  }
]

export const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
        src="/images/aboutme.jpg" 
        width={500} 
        height={500} 
        className='rounded-3xl'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
          Hey there, I'm Yong Qin, a fusion of aerospace engineering finesse and tech wizardry. Armed with a Master's in Computer Science and a Bachelor's with Honors in Aerospace Engineering, I'm a formidable force. My journey highlights my talent for optimizing systems, slashing code duplication, and crafting stellar user experiences. Fluent in languages like JavaScript and Python, I thrive in frameworks like React and Spring Boot. And when I'm not coding, you'll find me throwing punches in Muay Thai or grappling on the mats in Judo – a coder with a kick!
          </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
          <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

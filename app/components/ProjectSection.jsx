import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    title: "Portfolio Website",
    description: "An overengineered portfolio website to show what I can do",
    imgUrl: "/images/myportfolioproject.png"
  }
]

const ProjectSection = () => {
  return (
    <div>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>My Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project, id) => 
          <ProjectCard key={id} {...project}/>
        )}
      </div>
    </div>
  )
}

export default ProjectSection
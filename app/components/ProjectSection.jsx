import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My portfolio website to show what I can do",
    imgUrl: "/images/myportfolioproject.png",
    gitUrl: "https://github.com/yongqin3759/fooyongqin-frontend",
    previewUrl: "https://fooyongqin.com/"
  },
  {
    title: "Sentiment Analysis Model",
    description: "Classifying the severity of depression using tweets containing keywords relating to depression",
    imgUrl: "/images/llm.jpg",
    gitUrl: "https://github.com/yongqin3759/depression-backend",
    previewUrl: "http://54.179.112.115/docs#"
  },
  {
    title: "Exploration into the handling of private data",
    description: "An exploration on how to implement and optimize an API which deletes data in a timely manner",
    imgUrl: "/images/llm.jpg",
    gitUrl: "https://github.com/yongqin3759/mongodb-ttl-experiment",
    previewUrl: "http://54.179.112.115/docs#"
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
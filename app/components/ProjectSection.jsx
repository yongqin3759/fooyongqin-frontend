import React from 'react'
import ProjectCard from './ProjectCard'
import FYPModal from './modal/FYPModal'
import RobotModal from './modal/robotmodal/RobotModal'
import NLPModal from './modal/NLPModal'
import PortfolioModal from './modal/PortfolioModal'

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My portfolio website to show what I can do",
    imgUrl: "/images/myportfolioproject.png",
    gitUrl: "https://github.com/yongqin3759/fooyongqin-frontend",
    modal: <PortfolioModal/>
  },
  {
    title: "Sentiment Analysis Model",
    description: "Classifying the severity of depression using tweets containing keywords relating to depression",
    imgUrl: "/images/llm.jpg",
    gitUrl: "https://github.com/yongqin3759/depression-backend",
    downloadUrl: "./pdfs/Mentally Stable.pdf",
    modal: <NLPModal/>
  },
  {
    title: "NUS Capstone Project | A+",
    description: "An exploration on how to implement and optimize an API which deletes data in a timely manner with mongodb",
    imgUrl: "/images/mongodb.png",
    gitUrl: "https://github.com/yongqin3759/mongodb-ttl-experiment",
    downloadUrl: "./pdfs/FinalReport.pdf",
    modal: <FYPModal/>
  },
  {
    title: "Robot Project",
    description: "My first React assignment, only shows up nicely on desktop browser.",
    imgUrl: "/images/robot.png",
    gitUrl: "https://github.com/yongqin3759/robot-react/",
    modal: <RobotModal/>
  },
  {
    title: "Effects of Glucose-Loaded Nanocapsules on Flight Endurance in Beetles | NTU FYP",
    description: "Cyborg Beetles",
    imgUrl: "/images/beetle.png",
    modal: <div>One of my more interesting project I am happy to discuss, contact me for more info on this</div>
  },
]

const ProjectSection = () => {
  return (
    <section id='projects' className='py-14'>
      <h2 className='text-center text-4xl font-bold text-white mb-14'>My Personal Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project, id) => 
          <ProjectCard key={id} {...project}/>
        )}
      </div>
    </section>
  )
}

export default ProjectSection
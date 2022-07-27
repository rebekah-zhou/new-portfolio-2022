import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import ProjectImg from './ProjectImg'

function Projects() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/projects").then(r => {
      r.json()
      .then(projects => setProjects(() => projects))
    })
  }, [])

  if (projects.length < 1) {
    return (
      <h1></h1>
    )
  } else {
    return (
      <div id='projects'>
          <h1>Projects</h1>
          <div id='projects-container'>
            <div className="project-container">
              <ProjectCard project={projects[0]}/>
              <ProjectImg project={projects[0]}/>
            </div>
            <div className="project-container">
              <ProjectImg project={projects[1]}/>
              <ProjectCard project={projects[1]}/>
            </div>
            <div className="project-container">
              <ProjectCard project={projects[2]}/>
              <ProjectImg project={projects[2]}/>
            </div>
          </div>
      </div>
    )
  }
}

export default Projects
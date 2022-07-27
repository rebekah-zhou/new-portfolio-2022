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

  console.log(projects)

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
              <ProjectCard name={projects[0].name}/>
              <ProjectImg />
            </div>
            <div className="project-container">
              <ProjectImg />
              <ProjectCard name={projects[1].name}/>
            </div>
            <div className="project-container">
              <ProjectCard name={projects[2].name}/>
              <ProjectImg />
            </div>
          </div>
      </div>
    )
  }
}

export default Projects
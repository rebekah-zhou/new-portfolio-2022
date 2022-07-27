import React from 'react'


function ProjectCard({ project }) {
  const { name, github, website, demo } = project
  return (
    <div className='project-card'>
      <h2>{name}</h2>
      <a href={github}>
        <img src='/githubLogo.png' alt='github icon'/>
      </a>
    </div>
  )
}

export default ProjectCard
import React from 'react'


function ProjectCardLeft({ project }) {
  const { name, github, website, demo } = project
  return (
    <div className='project-card'>
      <div className="project-card-title">
        <h2>{name}</h2>
        <div className='row'>
          <a href={github}>
            <img className='logo' src='/githubLogo.png' alt='github icon'/>
          </a>
          <a href={website}>
            <span className="material-icons">&#xe051;</span>
          </a>
          <a href={demo}>
            <span className="material-icons">&#xf06a;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardLeft
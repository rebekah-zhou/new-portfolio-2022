import React from 'react'

function ProjectCardRight({ project }) {
	const { name, github, website, demo } = project
	return (
		<div className='project-card'>
		<div className="project-card-title">
			<a href={github}>
			<img className = 'logo' src='/githubLogo.png' alt='github icon'/>
			</a>
			<h2>{name}</h2>
		</div>
		</div>
	)
}

export default ProjectCardRight
import React from 'react'

function ProjectImg({ project }) {
  const { image, technologies, languages, name } = project

  console.log(image)
  return (
    <div className='project-img'>
      <img src={`${image}`} alt={`front page of ${name}`}/>
    </div>
  )
}

export default ProjectImg
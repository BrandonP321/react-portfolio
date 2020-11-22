import React from 'react'
import './index.css'

export default function ProjectCard({ project }) {
    return (
        <div className='row project-card'>
            <div className='project-img col-md-6'>
                <img src={project.capture} className='img-fluid'/>
            </div>
            <div className='col-md-6 project-desc-col'>
                <h1 className='text-center'>{project.name}</h1>
                <div className='project-desc'>
                    <p>{project.description}</p>
                </div>
                <a href={project.repoUrl} target='_blank' className='btn project-btn btn-primary'>Github Repo</a>
                <a href={project.siteUrl} target='_blank' className='btn project-btn btn-primary'>View Site</a>
            </div>
        </div>
    )
}

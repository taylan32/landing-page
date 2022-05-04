import React from 'react'
import { PersonelProjects } from '../data/informations'

export default function Projects() {

    return (
        <section id="projects" className='bg-dark-blue'>
            <h3 className='heading-large text-center text-uppercase'>Projeler</h3>
            <div className='items'>
                {
                    PersonelProjects.map(project => (
                        <div className='item' key={project.id}>
                            <h3 className='heading-large'>{project.name}</h3>
                            <h4><span className='text-capitalize'><a href={project.link}>{project.description}</a></span></h4>
                            <div className='project-codes'>
                                <h4><a href={project.githubLinkBackEnd}>Backend Kodları</a></h4>
                                <h4><a href={project.githubLinkFrontEnd}>Frontend Kodları</a></h4>
                            </div>
                            <h4>
                                <ul>
                                    {project.keywords.map(keyword => (
                                        <li key={keyword.id}>{keyword.name}</li>
                                    ))}
                                </ul>
                            </h4>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

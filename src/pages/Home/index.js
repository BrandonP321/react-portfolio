import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'
import ContactForm from '../../components/ContactForm'
import './index.css'

export default function Home() {
    const [projects, setProjects] = useState([
        {
            name: 'Quiz',
            repoUrl: 'https://github.com/BrandonP321/code-quiz',
            siteUrl: 'https://brandonp321.github.io/code-quiz/',
            description: 'A simple quiz where the user is asked a question and given 4 different possible answers to choose from.',
            capture: './assets/images/code-quiz-screen.png'
        },
        {
            name: 'Election Dashboard',
            repoUrl: 'https://github.com/elijah415hz/election-dashboard',
            siteUrl: 'https://elijah415hz.github.io/election-dashboard/',
            description: 'People can visit the Election Dashboard to receive basic info on all of the officials they can vote for.',
            capture: './assets/images/election-dash-capture.png'
        },
        {
            name: 'Random Password Generator',
            repoUrl: 'https://github.com/BrandonP321/password-generator',
            siteUrl: 'https://brandonp321.github.io/password-generator/',
            description: 'A simple site allowing any visitor to have a completely random password or letters, numbers, and special characters generated for them.',
            capture: './assets/images/password-generator-capture.png'
        }
    ])

    return (
        <div>
            <Header />
            <div id='projects'>
                {projects.map(project => {
                    return (
                        <ProjectCard
                            project={project}
                        />
                    )
                })}
            </div>
            <ContactForm />
            <Footer />
        </div>
    )
}

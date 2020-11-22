import React from 'react'
import './index.css'

export default function Header() {
    return (
        <header className='bg-dark'>
            <div className='nav-links-container'>
                <ul className='nav-links nav '>
                    <li className='nav-link'><a href='#projects' className='text-white'>Projects</a></li>
                    <li className='nav-link'><a href='#contact' className='text-white'>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

import React from 'react'
import './index.css'

export default function Header() {
    return (
        <header>
            <div className='nav-links-container'>
                <ul className='nav-links'>
                    <li className='nav-link'><a href='#about'>About</a></li>
                    <li className='nav-link'><a href='#about'>Projects</a></li>
                    <li className='nav-link'><a href='#about'>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

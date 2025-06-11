import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className="inner">

{/* Name */}

            <a href="#hero" className="logo">Dhinesh Kumar | 🎓</a>
            

    <nav className="desktop">
    <ul>
        {navLinks.map(({link,name})=>(
            <li key={name} className='group'>
                <a href={link}>
                    <span>{name}</span>
                    <span className="underline"></span>
                </a>
            </li>
        ))}
    </ul>
    </nav>

    {/* Contact button */}

    <a href="#contact" className="contact-btn group">
        <div className="inner">
        <span>Contact Me</span>
        </div></a>
        </div>
    </header>
  )
}

export default Navbar
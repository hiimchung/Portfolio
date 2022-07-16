import React from 'react'
import './navbar.css'
import {useState} from 'react'
import {FaHome} from 'react-icons/fa'
import {FaInfo} from 'react-icons/fa'
import {BiMessageAltDetail} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {SiBookstack} from 'react-icons/si'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick ={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><FaHome/></a>
        <a href="#about" onClick ={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><BsFillPersonFill/></a>
        <a href="#experience" onClick ={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><FaInfo/></a>
        <a href="#projects" onClick ={() => setActiveNav('#projects')} className={activeNav ==='#projects' ? 'active' : ''}><SiBookstack/></a>
        <a href="#contact" onClick ={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav
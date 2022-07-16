import React from 'react'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/imgs/Profile.png'
import HeaderSocial from './headerSocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jordan Chung</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="profile">
          <img src={profile} alt="" />
        </div>
        <a href="#contact" className='scroll'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header
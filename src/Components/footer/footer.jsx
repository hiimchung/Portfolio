import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
const footer = () => {
  return (
      <footer>
        <a href="#" className='footer__logo'>Jordan Chung</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jordan-chung-13054620a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hiimchung" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/chungylad" target="_blank"><BsTwitter/></a>
        <a href="https://instagram.com/chungylad" target="_blank"><BsInstagram/></a>
        </div>

        <div className="footer_copyright">
          <small>&copy; Jordan Chung. All rights reserved.</small>
        </div>
      </footer>
  )
}

export default footer
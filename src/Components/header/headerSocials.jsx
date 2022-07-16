import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jordan-chung-13054620a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hiimchung" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/chungylad" target="_blank"><BsTwitter/></a>
        <a href="https://instagram.com/chungylad" target="_blank"><BsInstagram/></a>
    </div>
  )
}
 
export default HeaderSocials
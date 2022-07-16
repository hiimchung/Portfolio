import React from 'react'
import './About.css'
import aboutpicture from '../../assets/imgs/About-me.jpg'
import {IoMdCodeWorking} from 'react-icons/io'
import {BsFillLightbulbFill} from 'react-icons/bs'
const about = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-img">
                    <img src={aboutpicture} alt="" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <BsFillLightbulbFill/>
                        <h5>Experience</h5>
                        <small>2+ Years</small>
                    </article>
                </div>
                {/* <div className="about__cards">
                    <article className="about__card">
                        <h5>Experience</h5>
                        <small>2+ Years</small>
                    </article> */}
                {/* </div> */}
                <div className="about__cards">
                    <article className="about__card">
                        <IoMdCodeWorking/>
                        <h5>Projects</h5>
                        <small>10+ Projects Completed</small>
                    </article>
                </div>
                
                <p>
                    I am a professional with experience in many fields, most recently web development. I have a strong background in Information Technology as well as Data Analysis. I have a deep interest in process optimization and user interaction. My greatest strength is my problem-solving, creativity and data-driven decision-making
                </p>

                <a href="#contact" className='btn btn-primary'>Get in Touch</a>
            </div>
        </div>
    
    </section>
  )
}

export default about
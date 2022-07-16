import React from 'react'
import {BsCheck2All} from 'react-icons/bs'
import './experience.css'
const experience = () => {
  return (
        <section id="experience">
            <h2>Skills I Have</h2>
            <div className="container experience__container">
                <div className="experience_webdev">
                    <h3>Web Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>Javascript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience__other">
                    <h3>Other Skills</h3>
                <div className="experience__content">
                <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>Python</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>Java</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>Microsoft Office Suite</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>Active Directory</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2All className='experience__details-icon'/>
                            <h4>Spanish</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default experience
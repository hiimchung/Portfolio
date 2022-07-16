import React from 'react'
import './project.css'
import project1 from '../../assets/imgs/Project1.jpg'
import project2 from '../../assets/imgs/Project2.jpg'
import project3 from '../../assets/imgs/Project3.jpg'


//Array of projects

const data =[
  {
    id:1,
    image: project1,
    title: 'Digital Business Card',
    github:'https://github.com/hiimchung/Digital-Business-Card.git',
    demo: 'https://hiimchung.github.io/Digital-Business-Card/'
  },
  {
    id:2,
    image: project2,
    title: 'To-Do Webapp',
    github:'https://github.com/hiimchung/to-do-webapp.git',
    demo: 'https://hiimchung.github.io/to-do-webapp/'
  },
  {
    id:3,
    image: project3,
    title: 'Real Estate Website',
    github:'https://github.com/hiimchung/',
    demo: 'http://client79.webtigerdesigndev.com/'
  }
]
const Project = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image"><img src={image} alt={title}/></div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project
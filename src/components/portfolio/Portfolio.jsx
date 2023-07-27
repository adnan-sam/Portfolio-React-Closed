import React from 'react';
import './portfolio.css';
import data from './data';

const Portfolio = () => {
  return (
    // <section id='portfolio'>
    <section id='project' >
      <h5>My Recent Work</h5>
      {/* <h2>Portfolio</h2> */}
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, alt, title, description, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={alt}/>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='portfolio_item-cta'>
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

export default Portfolio
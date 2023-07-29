import React from 'react';
import './portfolio.css';
import data from './hardwareData';

const Hardware = () => {
  return (
    <div className='container portfolio_container'>
            {
              data.map(({id, image, alt, title, description, youtube}) => {
                return (
                  <article key={id} className='portfolio_item'>
                    <div className='portfolio_item-image'>
                      <img src={image} alt={alt}/>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className='portfolio_item-cta'>
                      <a href={youtube} className='btn' target='_blank'>Watch</a>
                    </div>
                  </article>
                )
              })
            }
          </div>
  )
}

export default Hardware
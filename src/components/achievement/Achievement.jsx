import React from 'react';
import './achievement.css';
import certificatesData from './certificatesData';

const Achievement = () => {
  return (
    <section id='achievement'>
        <h2>Certificates</h2>
        <div className='container achievement_container'>
            {
              certificatesData.map(({id, certImage, name},index) => {
                return (                 
                  <article key={index} className='achievement'>
                      <div className='certificate_image'>
                          <img src={certImage} alt={name}/>
                      </div>
                  </article>
                )
              })
            }
        </div>
    </section>
  )
}

export default Achievement
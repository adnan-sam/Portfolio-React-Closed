import React from 'react';
import resume from '../../assets/AdnanSameer_Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
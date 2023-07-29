import {React, useState} from 'react';
import './portfolio.css';
import Software from './Software';
import Hardware from './Hardware';

const Portfolio = () => {
  const [hardware, setHardware] = useState('false');
  
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2 className='heading'>Projects</h2>
      <div className="switch_container">
        <div className="switches-container">
          <input type='radio' id="switchSoftware" name="switchPlan" value="Software" checked={true}/>
          <input type="radio" id="switchHardware" name="switchPlan" value="Hardware"/>
          <label htmlFor="switchSoftware" onClick={() => setHardware(false)}>Software</label>
          <label htmlFor="switchHardware" onClick={() => setHardware(true)}>Hardware</label>
          <div className="switch-wrapper">
            <div className="switch">
              <div>Software</div>
              <div>Hardware</div>
            </div>
          </div>
        </div>
      </div>
      {hardware===true ? <Hardware/>:<Software/>}
    </section>
  )
}

export default Portfolio
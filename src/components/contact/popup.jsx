import React from 'react';
import TICK from '../../assets/images/check-tick-icon-14141.png';
import './popup.css';

const Popup = () => {
  return (
    <div className='popup'>
        <img className='image' src={TICK}/>
        <h2>Thank You!</h2>
        <p>Your message has been successfully sent to Adnan. Thanks!</p>
        <button className='popup-btn btn btn-primary' type='button'>OK</button>
    </div>
  )
}

export default Popup
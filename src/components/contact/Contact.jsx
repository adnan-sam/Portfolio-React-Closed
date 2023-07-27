import React, { useState } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BiLogoTelegram} from 'react-icons/bi';
import {BsLinkedin} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Popup from './popup';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ww6qgbi', 'template_vyy01rq', form.current, 'FEQhZiwHmGgNPv_BL')
      .then((result) => {
          // console.log(result.text);
          setShowPopup(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const handleClosePopup = () => {
    // Function to close the popup
    setShowPopup(false);
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            {/* <h5>adnansameer400@gmail.com</h5> */}
            <a href='mailto:adnansameer400@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            {/* <h5>Adnan Sameer</h5> */}
            <a href='https://www.linkedin.com/in/adnan-sameer-199ba1223' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BiLogoTelegram className='contact_option-icon'/>
            <h4>Telegram</h4>
            {/* <h5>Adnan Sameer</h5> */}
            <a href='https://t.me/adnan_sam2001' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea> 
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {showPopup && <Popup onClose={handleClosePopup} />}
      </div>
    </section>
  )
}

export default Contact
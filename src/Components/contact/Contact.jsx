import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wdbbgq8', 'template_utbv0e7', form.current, '7UX-L3rKZfLs6DwIs')
      
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
          <div className="contact__options">
              <article className="contact__option">
                <AiOutlineMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>jordancchung1@gmail.com</h5>
                <a href="mailto:jordancchung1@gmail.com" target="_blank">Send an Email</a>
              </article>
              <article className="contact__option">
                <AiOutlineWhatsApp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>(876)824-9060</h5>
                <a href="https://api.whatsapp.com/send?phone=+18768249060" target="_blank">Send a Message</a>
              </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Enter Full Name' required/>
            <input type="email" name="email" placeholder='Enter Email' required />
            <textarea name="message" rows="7" placeholder='Enter a messaage' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './Contacts.css'
import {AiOutlineMail} from 'react-icons/ai'
import {LiaTelegramPlane} from 'react-icons/lia'
import {AiFillLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_diseuvm', 'template_4rzv6ip', form.current, 'z_ete5V9ICRVy9lcz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container conact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>lembakhanna@gmail.com</h5>
            <a href='mailto:lembakhanna@gmail.com'>Send Message</a>
          </article>
          <article className='contact_option'>
            <LiaTelegramPlane className='contact_icon'/>
            <h4>Telegram</h4>
            <h5>Hanna Lembak</h5>
            <a href='https://t.me/vydra_richkova' target='blank'>Send Message</a>
          </article>
          <article className='contact_option'>
            <AiFillLinkedin className='contact_icon'/>
            <h4>LinkEdinl</h4>
            <h5>Hanna Lembak</h5>
            <a href='https://www.linkedin.com/in/hanna-lembak-487b23211' target='blank'>Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

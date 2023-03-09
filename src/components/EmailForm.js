import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'p5_project', form.current, '6YEUkoqSppa5wMjRx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="email-header">
      <form className="email-form" ref={form} onSubmit={sendEmail}>
        <h2 className="email-page">Questions? Comments? Suggestions?</h2>
        <p className="email-content">Send us an email at <strong>info@rootedplantex.org</strong>. We'd love to hear from you!</p>
        <label className="email-label">Username</label> 
        <input className="email-input" type="text" name="user_name" /> <br/>
        <label className="email-label">Email</label>
        <input className="email-input" name="user_email" /> <br/>
        <label className="email-label-message">Message</label>
        <textarea className="email-input-message" name="message" /> <br/>
        <input className="email-button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs
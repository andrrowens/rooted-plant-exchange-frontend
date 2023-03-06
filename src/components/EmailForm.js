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
    <form className="email-form" ref={form} onSubmit={sendEmail}>
      <label>Username</label> 
      <input type="text" name="user_name" /> <br/>
      <label>Email</label>
      <input type="email" name="user_email" /> <br/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs
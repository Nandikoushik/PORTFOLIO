import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import language from "../../language/language";
import { config } from "../../Utils/config";
import { GrSend } from "react-icons/gr";

export const Contact = (props) => {
  const regExp = new RegExp(/^([^\s@]+@[^\s@]+\.[^\s@!+%^?&#<>=`~{\\[+}|"'"\]$*():;/-]+)*$/);
  const form = useRef();
  const [done, setDone] = useState(false)
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateFrom = () => {
    return formData?.from_name?.length &&
      regExp.test(formData?.reply_to?.trim()) &&
      formData.message?.length
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateFrom()) {
      //  Please use your own credentials from emailjs or i will recive your email

      emailjs
        .sendForm(
          config.email_service_key, config.email_template_key,
          form.current, config.email_public_key
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            mailSendDone();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const mailSendDone = () => {
    setTimeout(() => setDone(false), 3000)
  }
  return (
    <article className="contact active" data-page="contact">

      <header>
        <h2 className="h2 article-title">{props.title}</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src={config.location} width="400" height="300" loading="lazy" title='Location' allowFullScreen></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input
              type="text" name="from_name" className="form-input"
              placeholder="Full name" onChange={handleChange}
              required data-form-input />

            <input type="email" name="reply_to" className="form-input"
              placeholder="Email address" onChange={handleChange}
              required data-form-input />
          </div>

          <textarea name="message" className="form-input"
            placeholder="Your Message" onChange={handleChange}
            required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn onClick={sendEmail} disabled={!validateFrom()}>
            <GrSend name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
        {done && <span>{language.content.contact_success}</span>}
      </section>

    </article>
  );
};  
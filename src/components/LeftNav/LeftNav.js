import React, { useState } from "react";
import { config } from "../../Utils/config"
import profileImg from "../../images/profile.png"
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuArrowDownLeft, LuArrowUpRight } from "react-icons/lu";
import { MdOutlineMarkEmailRead, MdPhoneCallback, MdCalendarMonth, MdLocationPin } from "react-icons/md";


export const LeftNav = () => {
  const [customclass, setCustomClass] = useState('');
  const onButtonCClick = () => {
    if (!customclass) setCustomClass("active"); else setCustomClass("");
  }
  return (
    <aside className={"sidebar " + customclass} data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src={profileImg} alt="Koushik Nandi" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">Koushik Nandi</h1>
          <p className="title">MERN Stack Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn onClick={() => onButtonCClick()}>
          <span>Show Contacts</span>
          {customclass ? <LuArrowUpRight /> : <LuArrowDownLeft />}
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator" />

        <ul className="contacts-list">

          <li className="contact-item">
            <div className="icon-box"><MdOutlineMarkEmailRead /></div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:koushikbappa2001@gmail.com" className="contact-link">koushikbappa2001@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><MdPhoneCallback /></div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+91-9564621375" className="contact-link">+91 (956) 462-1375</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><MdCalendarMonth /></div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2001-05-06">June 05, 2001</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><MdLocationPin /></div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Kolkata, West Bengal, INDIA </address>
            </div>
          </li>

        </ul>

        <div className="separator" />

        <ul className="social-list">

          <li className="social-item">
            <a href={config.linkedin_profile} className="social-link" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>

          <li className="social-item">
            <a href={config.fb_profile} className="social-link" target="_blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>
          </li>

          <li className="social-item">
            <a href={config.x_profile} className="social-link" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
          </li>

          <li className="social-item">
            <a href={config.insta_profile} className="social-link" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </li>

        </ul>

      </div>

    </aside>
  );
};

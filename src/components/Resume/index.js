import React from "react";
import myResume from "../../images/resume.pdf"
import { IoBookSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { AiOutlineDownload } from "react-icons/ai";


const education = [
  {
    title: 'Future Institute  Of Engineering And Management (MAKAUT)',
    Date: '2019 — 2023',
    info: 'Bachelor of Science in Computer Science.Proficient in many programming languages'
  },
  {
    title: 'Belda Gangadhar Academy (WBCHSE)',
    Date: '2017 — 2019',
    info: 'Ability to Learn Quick and implementd .Strong problem-solving and analytical skills.'
  },
  {
    title: 'Sarisha Kunerpur Anchal High School (WBBSE)',
    Date: '2010 — 2017',
    info: 'Strong problem-solving and analytical skills,Ability to extract insights from complex datasets.'
  },
]
const experience = [
  {
    title: 'Associate Software Developer',
    Date: '2023 — Present',
    experiences: 'Enthusiastic Associate Software Developer seeking to contribute to a dynamic team and leverage my technical skills to create impactful software solutions. Experienced in [ReactJs, Node && Express Js , and Jira]. Committed to staying updated with the latest industry trends and best practices.'
  },
]
const progressBar = [{ JavaScript: 66 }, { ReactJs: 59 }, { MongoDb: 77 }, { NodeJs: 71 }, { Photography: 44 }];

export const Resume = (props) => {
  const handleDownload = () => {
    const pdfUrl = myResume;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume.pdf';
    link.click();
  };
  return (
    <article className="resume  active" data-page="resume">
      <header>
        <h2 className="h2 article-title">{props.title}
          <AiOutlineDownload onClick={() => handleDownload()} className="pdf-download" title="Download Now" /></h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><IoBookSharp /></div>
          <h3 className="h3">Education</h3>
        </div>
        <ul className="timeline-list">
          {education.map((item, index) => (
            <li className="timeline-item" key={'Education_' + index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.Date}</span>
              <p className="timeline-text">{item.info}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"> <FaComputer /></div>
          <h3 className="h3">Experience</h3>
        </div>
        <ul className="timeline-list">
          {experience.map((item, index) => (
            <li className="timeline-item" key={'Experience_' + index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.Date}</span>
              <p className="timeline-text">{item.experiences}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {progressBar.map((item, index) => (
            <li className="skills-item" key={'skils_' + index}>
              <div className="title-wrapper">
                <h5 className="h5">{Object.keys(item)[0]}</h5>
                <data value={Object.values(item)[0]}>{Object.values(item)[0]}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ "width": `${Object.values(item)[0]}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </article>
  );
};

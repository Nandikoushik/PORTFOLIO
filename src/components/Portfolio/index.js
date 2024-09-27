import React from "react";
import proj1 from "../../images/crm.png";
import proj2 from "../../images/portfolio.png"

export const Portfolio = (props) => {
  return (
    <article className="portfolio active" data-page="portfolio">

      <header>
        <h2 className="h2 article-title">{props.title}</h2>
      </header>

      <section className="projects">

        <ul className="filter-list">

          {/* <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li> */}

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>

        </ul>


        <ul className="project-list">

          <li className="project-item  active" data-filter-item data-category="web development">
            <figure className="project-img">
              <a href="https://crm-client-gold.vercel.app/" target="_blank" rel="noreferrer"><img src={proj1} alt="crm website" loading="lazy" /></a>
            </figure>
            <h3 className="project-title">CRM</h3>
            <p className="project-category">Customer Relationship Management</p>
          </li>

          <li className="project-item  active" data-filter-item data-category="web development">
            <figure className="project-img">
  <a href="https://koushik2001.vercel.app/" target="_blank" rel="noreferrer"><img src={proj2} alt="portfolio project" loading="lazy" /></a>
              
            </figure>
            <h3 className="project-title">PORTFOLIO</h3>
            <p className="project-category">Personal Portfolio Website</p>
          </li>

        </ul>

      </section>

    </article>

  );
};

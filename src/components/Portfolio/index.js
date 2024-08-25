import React from "react";
import proj1 from "../../images/project-1.jpg";
import proj2 from "../../images/project-2.png"

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
              <img src={proj1} alt="finance" loading="lazy" />
            </figure>
            <h3 className="project-title">Finance</h3>
            <p className="project-category">Web development</p>
          </li>

          <li className="project-item  active" data-filter-item data-category="web development">
            <figure className="project-img">
              <img src={proj2} alt="orizon" loading="lazy" />
            </figure>
            <h3 className="project-title">Orizon</h3>
            <p className="project-category">Web development</p>
          </li>

        </ul>

      </section>

    </article>

  );
};

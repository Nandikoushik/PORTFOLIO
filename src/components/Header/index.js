import React from "react";
import language from "../../language/language";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar className="navbar">
      <ul className="navbar-list">

        <li className="navbar-item">
          <Link className="navbar-link " to="/" >{language.title.about}</Link>
        </li>

        <li className="navbar-item">
          <Link className="navbar-link" to="/resume" >{language.title.resume}</Link>
        </li>

        <li className="navbar-item">
          <Link className="navbar-link" to="/projects" >{language.title.projects}</Link>
        </li>

        <li className="navbar-item">
          <Link className="navbar-link" to="/contact" >{language.title.contact}</Link>
        </li>

      </ul>

    </Navbar>
  );
};

import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import language from "language/language";
import "./index.css";

const Header = () => {
  const navItems = [
    { name: language.title.about, path: "/" },
    { name: language.title.skills, path: "/skills" },
    { name: language.title.projects, path: "/projects" },
    { name: language.title.contact, path: "/contact" },
  ];
  return (
    <Navbar className="header-navbar">
      <ul className="header-navbar-list">
        {navItems?.map((item, index) => (
          <li key={index + "_" + item.path} className="header-navbar-item">
            <Link className="header-navbar-link " to={item.path} >{item.name}</Link>
          </li>
        ))
        }
      </ul>
    </Navbar>
  );
};

export default Header;

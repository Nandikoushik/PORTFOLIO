import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import language from "language/language";
import "./index.css";

const Footer = () => {
    const navItems = [
        { name: language.title.about, path: "/" },
        { name: language.title.skills, path: "/skills" },
        { name: language.title.projects, path: "/projects" },
        { name: language.title.contact, path: "/contact" },
        { name: language.title.chat, path: "/chat" },
    ];
    return (
        <article className="active footer" data-page="footer">
            <Navbar className="footer-navbar">
                <ul className="footer-navbar-list">

                    {navItems?.map((item, index) => (
                        <li key={index + "_" + item.path} className="footer-navbar-item">
                            <Link className="footer-navbar-link" to={item.path}>{item.name}</Link>
                        </li>
                    ))
                    }
                </ul>
            </Navbar>
        </article>
    );
};

export default Footer;
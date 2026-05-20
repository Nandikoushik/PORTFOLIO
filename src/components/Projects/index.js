import crm from "images/crm.png";
import tour from "images/tour.png";
import clkclk from "images/clkclk.png";
import wpCrm from "images/wpCrm.png";
import proj2 from "images/portfolio.png"
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineOpenInNew } from "react-icons/md";


const Portfolio = (props) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("web development");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  const projects = [
    {
      image: tour,
      title: "Tour & Travel",
      category: "web development",
      url: process.env.REACT_APP_TOUR_URL,
      description: "A comprehensive tour management system for travel agencies",
      tags: ["JavaScript", "PostgreSQL", "Management"],
      color: "#1eff35"
    },
    {
      image: clkclk,
      title: "ClkClk",
      category: "web development",
      description: "Multi Tenant Cloud Kiosk Loyalty Generate Platform",
      url: "https://clkclk.com",
      tags: ["React", "Node.js", "Multi-tenant"],
      color: "#00d4ff"
    },
    {
      image: wpCrm,
      category: "web development",
      title: "Lead Converter for WhatsApp",
      url: process.env.REACT_APP_WP_CRM_URL,
      description: "WhatsApp Lead Converter for Customer Engagement",
      tags: ["Node.js", "Next.js", "PostgreSQL"],
      color: "#fffb00"
    },
    {
      image: crm,
      title: "CRM System",
      category: "web development",
      url: process.env.REACT_APP_CRM_URL,
      description: "Customer Relationship Management",
      tags: ["Node.js", "MongoDB", "Management"],
      color: "#fa9741"
    },
    {
      image: proj2,
      title: "PORTFOLIO",
      category: "web development",
      description: "Personal Portfolio Website",
      url: process.env.REACT_APP_PORTFOLIO_URL,
      tags: ["React", "Web Design", "Portfolio"],
      color: "#b5f96b"
    }
  ];

  const filteredProjects = projects.filter(p => p.category === selectedCategory);

  return (
    <article className="portfolio active" data-page="portfolio">

      <header>
        <h2 className="h2 article-title">{props.title}</h2>
      </header>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .project-item-animated {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>


      <section className="projects">
        {/* Filter Section */}
        <ul className="filter-list" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          listStyle: 'none',
          padding: 0,
          flexWrap: 'wrap'
        }}>
          {["web development"].map((category, i) => (
            <li key={i + "_" + category} className="filter-item">
              <button
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.7rem 2rem',
                  backgroundColor: selectedCategory === category
                    ? 'linear-gradient(135deg, #1e90ff 0%, #00d4ff 100%)'
                    : 'rgba(30, 144, 255, 0.1)',
                  color: selectedCategory === category ? '#ffffff' : '#1e90ff',
                  border: `2px solid ${selectedCategory === category ? '#1e90ff' : '#333'}`,
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'rgba(30, 144, 255, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'rgba(30, 144, 255, 0.1)';
                  }
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Projects Grid */}
        <ul className="project-list" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {filteredProjects.map((project, index) => (
            <li
              key={index + "_project_" + project.title}
              className="project-item-animated"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #333',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transform: hoveredProject === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredProject === index
                  ? `0 20px 40px ${project.color}33, 0 0 30px ${project.color}22`
                  : '0 8px 16px rgba(0, 0, 0, 0.3)',
                borderColor: hoveredProject === index ? project.color : '#333'
              }}>
                {/* Image Container */}
                <figure className="project-img" style={{
                  position: 'relative',
                  overflow: 'hidden',
                  margin: 0,
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0d0d0d',
                  padding: '1rem'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      transition: 'all 0.4s ease',
                      transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                      filter: hoveredProject === index ? 'brightness(0.7) blur(1px)' : 'brightness(1) blur(0)',
                      borderRadius: '8px'
                    }}
                  />

                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                    opacity: hoveredProject === index ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1rem',
                      transform: hoveredProject === index ? 'scale(1)' : 'scale(0.8)',
                      transition: 'transform 0.3s ease'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: project.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        color: '#000',
                        animation: hoveredProject === index ? 'floatUp 2s ease-in-out infinite' : 'none'
                      }}>
                        <MdOutlineOpenInNew />
                      </div>
                      <span style={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        letterSpacing: '1px'
                      }}>
                        VIEW PROJECT
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: project.color,
                    color: '#000',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: hoveredProject === index ? 1 : 0.8,
                    transition: 'all 0.3s ease'
                  }}>
                    {project.category.split(" ")[0]}
                  </div>
                </figure>

                {/* Content Section */}
                <div style={{
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Title and Description */}
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      <h3 className="project-title" style={{
                        fontSize: 'clamp(1rem, 3vw, 1.35rem)',
                        fontWeight: 700,
                        margin: '0 0 0.5rem 0',
                        transition: 'all 0.3s ease',
                        color: hoveredProject === index ? project.color : '#ffffff'
                      }}>
                        {project.title}
                      </h3>
                    </a>
                    <p className="project-category" style={{
                      fontSize: '0.95rem',
                      color: '#888',
                      margin: '0 0 1rem 0',
                      lineHeight: 1.5
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {project.tags.map((tag, i) => (
                      <span key={i + "_" + tag} style={{
                        padding: '0.35rem 0.7rem',
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: `1px solid ${project.color}40`,
                        transition: 'all 0.3s ease',
                        transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.8rem 1.5rem',
                      border: `2px solid ${project.color}`,
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: hoveredProject === index ? 'translateY(-3px)' : 'translateY(0)',
                      backgroundColor: hoveredProject === index ? project.color : `${project.color}10`,
                      color: hoveredProject === index ? '#000' : project.color,
                      boxShadow: hoveredProject === index ? `0 8px 16px ${project.color}40` : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = project.color;
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      if (hoveredProject === index) {
                        e.currentTarget.style.backgroundColor = project.color;
                        e.currentTarget.style.color = '#000';
                      } else {
                        e.currentTarget.style.backgroundColor = `${project.color}10`;
                        e.currentTarget.style.color = project.color;
                      }
                    }}
                  >
                    <FiExternalLink size={16} />
                    Visit Project
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
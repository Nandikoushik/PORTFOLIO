import { useState } from "react";
import { IoBookSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { MdPhotoCamera } from "react-icons/md";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { SiJavascript, SiReact, SiMongodb, SiNodedotjs } from "react-icons/si";

const education = [
  {
    title: "Future Institute  Of Engineering And Management (MAKAUT)",
    Date: "2019 — 2023",
    info: "Bachelor of Science in Computer Science.Proficient in many programming languages",
  },
];
const experience = [
  {
    title: "Associate Software Developer",
    Date: "2023 — 2024",
    experiences:
      "Enthusiastic Associate Software Developer with proficient in JavaScript, MongoDB, and RESTful API development. Strong problem-solving skills and a passion for creating seamless user experiences.",
  },
  {
    title: "Software Developer",
    Date: "2024 — 2026",
    experiences:
      "Full Stack Developer with 3 years of experience in React.js, Node.js, and Express.js, focused on building scalable and efficient applications. ",
  },
];
const progressBar = [
  { JavaScript: 66 },
  { ReactJs: 59 },
  { MongoDb: 77 },
  { NodeJs: 71 },
  { Photography: 44 },
];

// Skill icons and colors mapping
const skillIconsMap = {
  JavaScript: {
    icon: SiJavascript,
    color: "#f7df1e",
    bgColor: "rgba(247, 223, 30, 0.1)",
  },
  ReactJs: {
    icon: SiReact,
    color: "#61dafb",
    bgColor: "rgba(97, 218, 251, 0.1)",
  },
  MongoDb: {
    icon: SiMongodb,
    color: "#13aa52",
    bgColor: "rgba(19, 170, 82, 0.1)",
  },
  NodeJs: {
    icon: SiNodedotjs,
    color: "#68a063",
    bgColor: "rgba(104, 160, 99, 0.1)",
  },
  Photography: {
    icon: MdPhotoCamera,
    color: "#ff6b9d",
    bgColor: "rgba(255, 107, 157, 0.1)",
  },
};

const Skills = (props) => {
  const [expandedExperienceIndex, setExpandedExperienceIndex] = useState(null);
  const [expandedEducationIndex, setExpandedEducationIndex] = useState(null);

  const toggleExperienceExpand = (index) => {
    setExpandedExperienceIndex(
      expandedExperienceIndex === index ? null : index,
    );
  };

  const toggleEducationExpand = (index) => {
    setExpandedEducationIndex(expandedEducationIndex === index ? null : index);
  };

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">
          {props.title}
        </h2>
      </header>

      <section className="timeline" style={{ marginBottom: "3rem" }}>
        <div
          className="title-wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            className="icon-box"
            style={{
              fontSize: "1.8rem",
              color: "#ffd700",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoBookSharp />
          </div>
          <h3
            className="h3"
            style={{ margin: 0, fontSize: "clamp(1.2rem, 5vw, 1.5rem)" }}
          >
            Education
          </h3>
        </div>
        <ul
          className="timeline-list"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {education.map((item, index) => (
            <li
              className="timeline-item"
              key={"Education_" + index}
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(255, 215, 0, 0.12)",
                borderLeft: "4px solid #ffd700",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform:
                  expandedEducationIndex === index
                    ? "translateX(5px)"
                    : "translateX(0)",
              }}
              onClick={() => toggleEducationExpand(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(255, 215, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 215, 0, 0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h4
                    className="h4 timeline-item-title"
                    style={{
                      margin: "0 0 0.5rem 0",
                      fontSize: "clamp(1rem, 4vw, 1.2rem)",
                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "#ffd700",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.Date}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: "#ffd700",
                    marginLeft: "1rem",
                  }}
                >
                  {expandedEducationIndex === index ? (
                    <MdExpandLess />
                  ) : (
                    <MdExpandMore />
                  )}
                </div>
              </div>
              {expandedEducationIndex === index && (
                <p
                  className="timeline-text"
                  style={{
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255, 215, 0, 0.3)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "#cccccc",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  {item.info}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="timeline" style={{ marginBottom: "3rem" }}>
        <div
          className="title-wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            className="icon-box"
            style={{
              fontSize: "1.8rem",
              color: "#1e90ff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaComputer />
          </div>
          <h3
            className="h3"
            style={{ margin: 0, fontSize: "clamp(1.2rem, 5vw, 1.5rem)" }}
          >
            Experience
          </h3>
        </div>
        <ul
          className="timeline-list"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {experience.map((item, index) => (
            <li
              className="timeline-item"
              key={"Experience_" + index}
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(30, 144, 255, 0.12)",
                borderLeft: "4px solid #1e90ff",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform:
                  expandedExperienceIndex === index
                    ? "translateX(5px)"
                    : "translateX(0)",
              }}
              onClick={() => toggleExperienceExpand(index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(30, 144, 255, 0.2)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(30, 144, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(30, 144, 255, 0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h4
                    className="h4 timeline-item-title"
                    style={{
                      margin: "0 0 0.5rem 0",
                      fontSize: "clamp(1rem, 4vw, 1.2rem)",
                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "#1e90ff",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.Date}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: "#1e90ff",
                    marginLeft: "1rem",
                  }}
                >
                  {expandedExperienceIndex === index ? (
                    <MdExpandLess />
                  ) : (
                    <MdExpandMore />
                  )}
                </div>
              </div>
              {expandedExperienceIndex === index && (
                <p
                  className="timeline-text"
                  style={{
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(30, 144, 255, 0.3)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "#cccccc",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  {item.experiences}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="skill">
        <h3
          className="h3 skills-title"
          style={{
            marginBottom: "2rem",
            fontSize: "clamp(1.3rem, 5vw, 1.8rem)",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              background: "linear-gradient(135deg, #1e90ff, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🚀
          </span>
          My skills
          <span
            style={{
              fontSize: "2rem",
              background: "linear-gradient(135deg, #00d4ff, #1e90ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ⚡
          </span>
        </h3>
        <ul
          className="skills-list content-card"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            listStyle: "none",
            padding: "2rem 0",
            margin: 0,
          }}
        >
          {progressBar.map((item, index) => {
            const skillName = Object.keys(item)[0];
            const skillValue = Object.values(item)[0];
            const skillData = skillIconsMap[skillName] || {
              icon: MdPhotoCamera,
              color: "#888",
              bgColor: "rgba(136, 136, 136, 0.1)",
            };
            const IconComponent = skillData.icon;

            return (
              <li
                className="skills-item"
                key={"skils_" + index}
                style={{
                  padding: "2rem",
                  backgroundColor:
                    "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)",
                  background:
                    "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)",
                  borderRadius: "12px",
                  border: "2px solid #333333",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "linear-gradient(135deg, #1e3a5f 0%, #0d47a1 100%)";
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #1e3a5f 0%, #0d47a1 100%)";
                  e.currentTarget.style.borderColor = skillData.color;
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 16px 32px ${skillData.bgColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)";
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)";
                  e.currentTarget.style.borderColor = "#333333";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.3)";
                }}
              >
                {/* Icon Badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "12px",
                      backgroundColor: skillData.bgColor,
                      border: `2px solid ${skillData.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.5rem",
                      color: skillData.color,
                      transition: "all 0.3s ease",
                      boxShadow: `inset 0 0 10px ${skillData.bgColor}`,
                    }}
                  >
                    <IconComponent />
                  </div>
                </div>

                {/* Title and Percentage */}
                <div
                  className="title-wrapper"
                  style={{
                    marginBottom: "1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5
                    className="h5"
                    style={{
                      margin: 0,
                      fontSize: "clamp(1rem, 4vw, 1.25rem)",
                      color: "#ffffff",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {skillName}
                  </h5>
                  <data
                    value={skillValue}
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: skillData.color,
                      backgroundColor: skillData.bgColor,
                      padding: "0.35rem 0.75rem",
                      borderRadius: "20px",
                      letterSpacing: "0.5px",
                      border: `1px solid ${skillData.color}`,
                    }}
                  >
                    {skillValue}%
                  </data>
                </div>

                {/* Progress Bar */}
                <div
                  className="skill-progress-bg"
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderRadius: "12px",
                    height: "10px",
                    overflow: "hidden",
                    position: "relative",
                    border: `1px solid ${skillData.color}33`,
                  }}
                >
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skillValue}%`,
                      height: "100%",
                      background: `linear-gradient(90deg, ${skillData.color}, ${skillData.color}dd)`,
                      borderRadius: "12px",
                      transition:
                        "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      boxShadow: `0 0 8px ${skillData.color}99`,
                    }}
                  />
                </div>

                {/* Footer */}
                <div
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.8rem",
                    color: "#888888",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  ⭐ Expert Level
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default  Skills 

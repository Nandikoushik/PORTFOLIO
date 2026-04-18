import { useEffect, useState } from "react";
import myResume from "images/resume_K_N.pdf";
import android from "images/android.jpeg";
import checkBox from "images/check-orange.png";
import iButton from "images/business-profile-ico4h.png"
import photography from "images/photography.png";
import { AiOutlineDownload } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./index.css";

const About = (props) => {
    const [hoveredService, setHoveredService] = useState(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);
    const [ripples, setRipples] = useState([]);

    useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

    const handleResumeDownload = (e) => {
        setIsDownloading(true);

        // Calculate ripple position
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples([...ripples, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
        }, 600);

        // Simulate download and show success
        setTimeout(() => {
            const pdfUrl = myResume;
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = `Koushik_Nandi_Resume-${new Date().getTime()}.pdf`;
            link.click();

            setIsDownloading(false);
            setDownloadSuccess(true);

            // Reset success state after 2 seconds
            setTimeout(() => {
                setDownloadSuccess(false);
            }, 2000);
        }, 800);
    };
    return (
        <article className="about  active" data-page="about">
            <header>
                <h2 className="h2 article-title animated-text">{props.title}</h2>
            </header>

            <div className="resume-button-wrapper">
                <button
                    onClick={handleResumeDownload}
                    disabled={isDownloading}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: isDownloading ? '0.5rem' : '0.75rem',
                        padding: '0.5rem',
                        backgroundColor: downloadSuccess
                            ? 'linear-gradient(135deg, #13aa52 0%, #0d7a2f 100%)'
                            : 'linear-gradient(135deg, #1e90ff 0%, #00d4ff 100%)',
                        background: downloadSuccess
                            ? 'linear-gradient(135deg, #13aa52 0%, #0d7a2f 100%)'
                            : 'linear-gradient(135deg, #1e90ff 0%, #00d4ff 100%)',
                        color: '#ffffff',
                        border: '2px solid transparent',
                        borderRadius: '12px',
                        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                        fontWeight: 700,
                        cursor: isDownloading ? 'wait' : 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: downloadSuccess
                            ? '0 10px 30px rgba(19, 170, 82, 0.4)'
                            : '0 8px 20px rgba(30, 144, 255, 0.4)',
                        textDecoration: 'none',
                        animation: isDownloading ? 'none' : 'border-glow 2s ease-in-out infinite',
                        opacity: isDownloading ? 0.9 : 1,
                        letterSpacing: '0.5px'
                    }}
                    onMouseEnter={(e) => {
                        if (!isDownloading) {
                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(30, 144, 255, 0.6)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isDownloading) {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 144, 255, 0.4)';
                        }
                    }}
                >
                    {/* Ripple Effects */}
                    {ripples.map(ripple => (
                        <div
                            key={"about-ripple-" + ripple.id}
                            style={{
                                position: 'absolute',
                                left: ripple.x,
                                top: ripple.y,
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none',
                                animation: 'ripple-animation 0.6s ease-out'
                            }}
                        />
                    ))}

                    {/* Icon */}
                    <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        animation: isDownloading
                            ? 'icon-rotate 1s linear infinite'
                            : downloadSuccess
                                ? 'pulse 0.5s ease-out'
                                : 'icon-bounce 2s ease-in-out infinite',
                        fontSize: '1.3rem'
                    }}>
                        {downloadSuccess ? <MdDone size={24} /> : <AiOutlineDownload size={24} />}
                    </span>

                    {/* Text */}
                    <span style={{
                        transition: 'all 0.3s ease',
                        fontWeight: 700
                    }}>
                        {isDownloading
                            ? 'Downloading...'
                            : downloadSuccess
                                ? 'Downloaded!'
                                : 'Download Resume'
                        }
                    </span>

                    {/* Animated Border */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '12px',
                        padding: '2px',
                        background: downloadSuccess
                            ? 'linear-gradient(135deg, #13aa52, #0d7a2f)'
                            : 'linear-gradient(135deg, #1e90ff, #00d4ff, #1e90ff)',
                        WebkitMask: downloadSuccess
                            ? 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)'
                            : 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        pointerEvents: 'none',
                        opacity: 0.5
                    }} />
                </button>

                {/* Glow Background */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '12px',
                    background: downloadSuccess
                        ? 'radial-gradient(circle, rgba(19, 170, 82, 0.2), transparent)'
                        : 'radial-gradient(circle, rgba(30, 144, 255, 0.2), transparent)',
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                    opacity: isDownloading ? 1 : 0.7,
                    transition: 'opacity 0.3s ease'
                }} />
            </div>

            {/* About Text Section */}
            <section className="about-text" style={{
                marginBottom: '3rem',
                padding: '2rem',
                backgroundColor: 'rgba(30, 144, 255, 0.05)',
                borderLeft: '4px solid #1e90ff',
                borderRadius: '8px',
                lineHeight: 1.8
            }}>
                <p style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    color: '#e0e0e0',
                    marginBottom: '1rem',
                    fontWeight: 500
                }}>
                    I'm Creative Director and UI/UX Designer from Kolkata, INDIA working in web development and print media.
                    I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>

                <p style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    color: '#cccccc',
                    marginBottom: 0
                }}>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
            </section>

            {/* Services Section */}
            <section className="service">
                <h3 className="h3 service-title" style={{
                    marginBottom: '2.5rem',
                    fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    <span style={{
                        fontSize: '2rem',
                        background: 'linear-gradient(135deg, #1e90ff, #00d4ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>✨</span>
                    What I'm doing
                    <span style={{
                        fontSize: '2rem',
                        background: 'linear-gradient(135deg, #00d4ff, #1e90ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>⚡</span>
                </h3>

                <ul className="service-list" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    {[
                        { id: 0, icon: checkBox, title: 'Web design', description: 'The most modern and high-quality design made at a professional level.' },
                        { id: 1, icon: iButton, title: 'Web development', description: 'High-quality development of sites at the professional level.' },
                        { id: 2, icon: android, title: 'Mobile apps', description: 'Professional development of applications for iOS and Android.' },
                        { id: 3, icon: photography, title: 'Photography', description: 'I make high-quality photos of any category at a professional level.' }
                    ].map((service) => (
                        <li
                            key={"about-service-" + service.id}
                            className="service-item"
                            style={{
                                padding: '2rem',
                                backgroundColor: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)',
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)',
                                borderRadius: '12px',
                                border: '2px solid #333333',
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                            }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            {/* Animated Background */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, #1e3a5f 0%, #0d47a1 100%)',
                                opacity: hoveredService === service.id ? 1 : 0,
                                transition: 'opacity 0.4s ease',
                                zIndex: -1
                            }} />

                            {/* Icon Box */}
                            <div className="service-icon-box" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                transform: hoveredService === service.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
                                transition: 'transform 0.4s ease'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(30, 144, 255, 0.15)',
                                    border: '2px solid #1e90ff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: hoveredService === service.id ? '0 0 20px rgba(30, 144, 255, 0.4)' : '0 0 0px transparent',
                                    transition: 'all 0.4s ease'
                                }}>
                                    <img src={service.icon} alt={service.title} width="45" style={{
                                        filter: hoveredService === service.id ? 'brightness(1.2)' : 'brightness(1)',
                                        transition: 'filter 0.3s ease'
                                    }} />
                                </div>
                            </div>

                            {/* Content Box */}
                            <div className="service-content-box" style={{
                                textAlign: 'center'
                            }}>
                                <h4 className="h4 service-item-title" style={{
                                    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                                    color: '#ffffff',
                                    marginBottom: '1rem',
                                    fontWeight: 700,
                                    transition: 'all 0.3s ease',
                                    transform: hoveredService === service.id ? 'scale(1.05)' : 'scale(1)'
                                }}>
                                    {service.title}
                                </h4>

                                <p className="service-item-text" style={{
                                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                    lineHeight: 1.6,
                                    margin: 0,
                                    transition: 'color 0.3s ease',
                                    color: hoveredService === service.id ? '#e0e0e0' : '#cccccc'
                                }}>
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Line */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'linear-gradient(90deg, #1e90ff, #00d4ff)',
                                transform: hoveredService === service.id ? 'scaleX(1)' : 'scaleX(0)',
                                transformOrigin: 'left',
                                transition: 'transform 0.4s ease'
                            }} />
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default About;

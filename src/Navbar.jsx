import { useState } from 'react';
import './Navbar.css'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <section id="nav-section">
                <div className="container">
                    <div className="logo-nav">
                        <div>
                            <p className="linear">Portfolio</p>
                        </div>
                    </div>

                    <div className="links">
                        <div><a className="active" href="#hero-section">Home</a></div>
                        <div><a href="#aboutme-section">About</a></div>
                        <div><a href="#skills-section">Skills</a></div>
                        <div><a href="#projects-section">Projects</a></div>
                        <div><a href="#contact-section">Contact Me</a></div>
                    </div>

                    <div
                        className="menu-icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="fa-solid fa-sliders"></i>
                    </div>

                    <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                        <a href="#hero-section" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#aboutme-section" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#skills-section" onClick={() => setIsMenuOpen(false)}>Skills</a>
                        <a href="#projects-section" onClick={() => setIsMenuOpen(false)}>Projects</a>
                        <a href="#contact-section" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Navbar
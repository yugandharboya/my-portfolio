import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleScroll = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    const headerOffset = 80;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="header-root">
        <div className="header-container">
          <button
            onClick={() => handleScroll("hero")}
            className="header-logo-btn"
          >
            Yugandhar
          </button>

          <nav className="header-desktop-nav">
            <ul className="header-nav-list">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="header-nav-link-btn"
                  >
                    <span className="header-nav-number">0{index + 1}.</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header-resume-link"
            >
              Resume
            </a>

            <div className="header-socials-group">
              <a
                href="https://github.com/yugandharboya"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="header-social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yugandharboya"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="header-social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="header-mobile-toggle-btn"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-drawer-root">
          <div
            className="mobile-drawer-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="mobile-drawer-panel">
            <nav className="mobile-drawer-nav">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="mobile-drawer-link-btn"
                >
                  <span className="mobile-drawer-nav-num">0{index + 1}.</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-drawer-resume-btn"
              >
                📄 Download Resume
              </a>

              <div className="mobile-drawer-socials">
                <a
                  href="https://github.com/yugandharboya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="mobile-drawer-social-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yugandharboya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="mobile-drawer-social-icon"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

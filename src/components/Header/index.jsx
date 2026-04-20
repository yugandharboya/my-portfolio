import "./index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    const headerOffset = 85; //  header height
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

  return (
    <header className="header">
      <h1 className="header-title">Yugandhar Portfolio</h1>

      <div className="header-nav">
        <button
          onClick={() => handleScroll("about")}
          className="header-nav-btn"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("skills")}
          className="header-nav-btn"
        >
          Skills
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className="header-nav-btn"
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll("experience")}
          className="header-nav-btn"
        >
          Experience
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="header-nav-btn"
        >
          Contact
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          📄 Download Resume
        </a>

        <div className="social-links">
          <a
            href="https://github.com/yugandharboya"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="social-link-icons" />
          </a>
          <a
            href="https://linkedin.com/in/yugandharboya"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-link-icons" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

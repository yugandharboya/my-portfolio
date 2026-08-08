import projects from "../../Data/projects";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import "./Projects.css";

const ProjectsCard = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header-row">
        <h2 className="section-heading-title text-fluid-section">
          <span className="section-heading-number">03.</span> Featured Projects & Experience
        </h2>
        <div className="section-heading-line" />
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`project-card ${project.featured ? "featured-card" : ""}`}
          >
            <div className="project-card-body">
              {project.featured && (
                <span className="featured-badge">
                  <FaStar /> Featured Instructor Program
                </span>
              )}

              <div className="project-card-header">
                <h3 className="project-title text-fluid-card-title">
                  {project.title}
                </h3>
                <div className="project-icon-links">
                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="project-icon-link"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live site for ${project.title}`}
                      className="project-icon-link-sm"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description text-fluid-body">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="project-features-container">
                  <p className="project-features-label">Key Features / Highlights:</p>
                  <ul className="project-features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="project-feature-item">
                        <span className="project-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="project-tech-footer">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="project-tech-badge"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCard;

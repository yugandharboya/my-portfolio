import "./index.css";
import projects from "../../Data/projects";

const ProjectsCard = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-card-header">
        <h2 className="section-heading">
          <span className="section-number">03.</span> Projects
        </h2>
        <hr className="hr-line" />
      </div>

      <div className="projects-list">
        {projects.map((each) => (
          <div key={each.title} className="project-item">
            <h3 className="project-title">{each.title}</h3>

            <p className="project-description">{each.description}</p>

            <div className="project-meta">
              <span className="meta-label">Tech :</span>
              <span className="meta-value">{each.tech.join(", ")}</span>
            </div>

            <div className="project-meta">
              <span className="meta-label">Live :</span>
              <a
                href={each.live}
                target="_blank"
                rel="noreferrer"
                className="live-link"
              >
                {new URL(each.live).hostname}
              </a>
            </div>

            <div className="project-meta">
              <span className="meta-label">Source :</span>
              <a
                href={each.git}
                target="_blank"
                rel="noreferrer"
                className="git-btn"
              >
                GitHub
              </a>
            </div>

            {/* ✅ Features Section */}
            {each.features && (
              <div className="project-features-container">
                <p className="features-heading">Features</p>
                <ul className="project-features">
                  {each.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;

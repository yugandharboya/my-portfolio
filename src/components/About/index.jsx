import { FaCode, FaServer, FaGraduationCap, FaUserTie } from "react-icons/fa";
import "./About.css";

const AboutCard = () => {
  const highlights = [
    {
      icon: <FaCode className="highlight-icon" />,
      title: "Gen AI Curriculum & Teaching",
      desc: "Designing and delivering hands-on Generative AI training for engineering students.",
    },
    {
      icon: <FaServer className="highlight-icon" />,
      title: "Full-Stack Engineering Background",
      desc: "Real MERN-stack production experience, brought directly into every lesson.",
    },
    {
      icon: <FaGraduationCap className="highlight-icon" />,
      title: "Student-Focused Mentorship",
      desc: "Turning complex AI/ML concepts into practical, project-based learning.",
    },
    {
      icon: <FaUserTie className="highlight-icon" />,
      title: "Industry-Ready Training",
      desc: "Bridging classroom learning with real-world, production-level practices.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-header-row">
        <h2 className="section-heading-title text-fluid-section">
          <span className="section-heading-number">01.</span> About Me
        </h2>
        <div className="section-heading-line" />
      </div>

      <div className="about-content-row">
        <div className="about-narrative-text text-fluid-body">
          <p>
            I'm a Generative AI Instructor at NextWave, where I train engineering students in Generative AI, full-stack development, and modern software engineering practices. My goal is to turn complex AI concepts into practical, hands-on skills students can carry into real internships and jobs.
          </p>

          <p>
            Before teaching, I spent years as a full-stack developer building production-grade platforms using the MERN stack. That hands-on engineering experience shapes how I teach — I focus on real-world workflows and industry practices, not just theory.
          </p>

          <p>
            I enjoy simplifying advanced concepts, mentoring students through projects, and continuously improving how I teach — blending industry standards with structured, practical learning paths.
          </p>
        </div>

        <div className="about-highlights-grid">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="highlight-card"
            >
              <div className="highlight-icon-box">
                {item.icon}
              </div>
              <div className="highlight-text-box">
                <h3 className="highlight-title">
                  {item.title}
                </h3>
                <p className="highlight-desc">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCard;

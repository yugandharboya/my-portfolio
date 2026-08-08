import "./Experience.css";

const ExperienceCard = () => {
  const experiences = [
    {
      role: "Generative AI Instructor",
      company: "NextWave",
      duration: "2026 – Present",
      points: [
        "Deliver Generative AI and full-stack development training to engineering students.",
        "Design and maintain curriculum covering LLMs, prompt engineering, RAG, and AI-integrated application development.",
        "Mentor students through hands-on projects, bridging classroom learning with industry practices.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "VTouch Media",
      duration: "2026",
      points: [
        "Developed a production-ready business website using React.js and modern UI standards.",
        "Improved UI design and enhanced user engagement across mobile and desktop breakpoints.",
        "Integrated multiple communication channels including Email, WhatsApp, and phone support.",
      ],
    },
    {
      role: "Full Stack Developer Trainee",
      company: "NextWave",
      duration: "2024 – 2025",
      points: [
        "Built full-stack applications using the MERN stack with scalable backend architecture.",
        "Developed REST APIs, handled database models, and integrated frontend state.",
        "Implemented secure JWT authentication, authorization, and CRUD operations.",
      ],
    },
    {
      role: "Founder & Operations Manager",
      company: "Yugandhar Pest Control Service",
      duration: "2023 – 2024",
      points: [
        "Managed end-to-end business operations including client handling and service coordination.",
        "Handled customer communication, resolved service inquiries, and ensured customer satisfaction.",
        "Developed key skills in leadership, operational workflow, and team collaboration.",
      ],
    },
    {
      role: "Service Professional",
      company: "UrbanClap",
      duration: "Prior Experience",
      points: [
        "Delivered on-demand services while maintaining high customer satisfaction ratings.",
        "Followed structured operational workflows, quality assurance, and service standards.",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="section-header-row">
        <h2 className="section-heading-title text-fluid-section">
          <span className="section-heading-number">04.</span> Work Experience
        </h2>
        <div className="section-heading-line" />
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
          >
            <div className="experience-card-body">
              <div className="experience-card-header">
                <div className="experience-role-group">
                  <h3 className="experience-role-title text-fluid-card-title">
                    {exp.role}
                  </h3>
                  <p className="experience-company-name">
                    @ {exp.company}
                  </p>
                </div>
                <span className="experience-duration-tag">
                  {exp.duration}
                </span>
              </div>

              <ul className="experience-points-list">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="experience-point-item">
                    <span className="experience-point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCard;

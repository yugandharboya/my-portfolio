import "./index.css";

const ExperienceCard = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <h2 className="experience-title">
          <span className="experience-number">03.</span> Experience
        </h2>
        <hr className="experience-line" />
      </div>

      <div className="experience-list">
        <div className="experience-item">
          <h3 className="role-title">Freelance Web Developer — VTouch Media</h3>
          <p className="experience-duration">2026</p>

          <ul className="experience-points">
            <li>
              Developed a production-ready business website using React.js
            </li>
            <li>Improved UI design and enhanced user engagement</li>
            <li>
              Integrated multiple communication channels including Email,
              WhatsApp, and phone
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="role-title">
            Full Stack Developer Trainee — NextWave
          </h3>
          <p className="experience-duration">2024 – 2025</p>

          <ul className="experience-points">
            <li>Built full-stack applications using the MERN stack</li>
            <li>Developed REST APIs and handled backend logic</li>
            <li>Implemented authentication and CRUD operations</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="role-title">
            Founder & Operations Manager — Yugandhar Pest Control Service
          </h3>
          <p className="experience-duration">2021 – 2024</p>

          <ul className="experience-points">
            <li>
              Managed end-to-end business operations including client handling
              and service coordination
            </li>
            <li>
              Handled customer communication and ensured smooth service delivery
            </li>
            <li>
              Developed leadership, problem-solving, and team collaboration
              skills
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="role-title">Service Professional — UrbanClap</h3>

          <ul className="experience-points">
            <li>
              Delivered on-demand services while maintaining high customer
              satisfaction
            </li>
            <li>Followed structured workflows and service standards</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;

import "./index.css";

const AboutCard = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-card-header-container">
        <h2 className="section-heading">
          <span className="section-number">01.</span> About
        </h2>
        <hr className="hr-line" />
      </div>

      <div className="about-card-body">
        <div className="description-wrapper">
          <p className="about-card-description">
            I’m a full-stack web developer with hands-on experience building
            real-world applications using the MERN stack. Along with my
            development journey, I’ve worked on freelance projects and built
            production-ready web applications focused on performance and user
            experience.
          </p>

          <p className="about-card-description">
            Before stepping into tech, I ran my own service business, where I
            developed strong skills in communication, client handling, and
            operations management. This experience helps me approach development
            with a practical mindset and focus on solving real user problems.
          </p>

          <p className="about-card-description">
            I enjoy building scalable and user-friendly applications, and I
            continuously work on improving my skills by developing new projects
            and exploring modern technologies.
          </p>
        </div>

        <img
          src="/myProfile.JPG"
          alt="Yugandhar"
          className="about-card-image"
        />
      </div>
    </div>
  );
};

export default AboutCard;

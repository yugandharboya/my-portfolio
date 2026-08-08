import "./Hero.css";

const HeroCard = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-profile-row">
        <div className="hero-avatar-container">
          <img
            src="/myProfile.JPG"
            alt="Yugandhar Boya"
            className="hero-avatar-img"
          />
        </div>
        <div className="hero-greeting-box">
          <p className="hero-greeting-text">
            Hi, my name is{" "}
            <span className="hero-name-inline">Yugandhar Boya</span>
          </p>
          <span className="hero-hire-badge">
            Gen AI Instructor @ NextWave
          </span>
        </div>
      </div>

      <h1 className="hero-promoted-headline text-fluid-h1">
        Gen AI Instructor at NextWave, training engineering students in Generative AI and full-stack development.
      </h1>

      <p className="hero-description text-fluid-body">
        I’m a full-stack web developer and Generative AI Instructor passionate about building production-grade web applications and training the next generation of engineers in AI and modern software development.
      </p>

      <div className="hero-actions-group">
        <button
          onClick={scrollToContact}
          className="hero-btn-primary"
        >
          Get In Touch
        </button>

        <button
          onClick={scrollToProjects}
          className="hero-btn-secondary"
        >
          Check out my work!
        </button>
      </div>
    </section>
  );
};

export default HeroCard;

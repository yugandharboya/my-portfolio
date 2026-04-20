import "./index.css";

const HeroCard = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="hero">
      <img src="/myProfile.JPG" className="my-profie" />

      <p className="hero-intro">Hi, my name is</p>

      <h1 className="hero-title">Yugandhar Boya.</h1>

      <h2 className="hero-subtitle">
        I build scalable full-stack web applications.
      </h2>

      <p className="hero-description">
        I’m a full-stack web developer with hands-on experience building
        production-ready applications using the MERN stack. I’ve developed real
        projects including business websites, SaaS applications, and dynamic web
        platforms with authentication, APIs, and responsive UI.
      </p>
    </section>
  );
};

export default HeroCard;

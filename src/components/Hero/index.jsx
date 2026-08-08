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
    <section
      className="w-full flex flex-col justify-center min-h-[calc(100vh-80px)] py-8 sm:py-12 md:py-16 gap-4 sm:gap-6 min-w-0"
      id="hero"
    >
      <div className="flex items-center gap-4 mb-2 min-w-0">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#64ffda] shadow-xl shadow-[#64ffda]/10 flex-shrink-0">
          <img
            src="/myProfile.JPG"
            alt="Yugandhar Boya"
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <p className="font-mono text-sm sm:text-base text-[#64ffda] tracking-wide break-normal">
            Hi, my name is
          </p>
          <span className="inline-block px-3 py-1 text-xs font-mono bg-[#112240] text-[#64ffda] rounded-full border border-[#233554] w-fit mt-1 whitespace-nowrap">
            Available for Hire 🚀
          </span>
        </div>
      </div>

      <h1 className="text-fluid-h1 font-extrabold text-[#e6f1ff] tracking-tight min-w-0 break-normal">
        Yugandhar Boya.
      </h1>

      <h2 className="text-fluid-h2 font-bold text-[#8892b0] tracking-tight min-w-0 break-normal">
        I build scalable full-stack web applications.
      </h2>

      <p className="text-fluid-body text-[#8892b0] max-w-2xl leading-relaxed mt-2 min-w-0 break-normal">
        I’m a full-stack web developer with hands-on experience building
        production-ready applications using the MERN stack. I’ve developed real
        projects including business websites, SaaS platforms, and dynamic web applications with REST APIs, authentication, and responsive UI.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4 sm:mt-6 min-w-0">
        <button
          onClick={scrollToProjects}
          className="border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-6 py-3 rounded font-mono text-sm font-semibold tracking-wide transition-all duration-200 min-h-[44px] flex items-center justify-center cursor-pointer shadow-lg shadow-[#64ffda]/5 hover:-translate-y-0.5"
        >
          Check out my work!
        </button>

        <button
          onClick={scrollToContact}
          className="bg-[#112240] hover:bg-[#1d3557] text-[#ccd6f6] border border-[#233554] hover:border-[#64ffda] px-6 py-3 rounded font-mono text-sm tracking-wide transition-all duration-200 min-h-[44px] flex items-center justify-center cursor-pointer"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default HeroCard;

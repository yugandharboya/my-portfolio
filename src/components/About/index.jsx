import { FaCode, FaServer, FaRocket, FaUserTie } from "react-icons/fa";

const AboutCard = () => {
  const highlights = [
    {
      icon: <FaCode className="text-[#64ffda] text-xl" />,
      title: "Frontend Mastery",
      desc: "React.js, JavaScript (ES6+), HTML5/CSS3 & Tailwind CSS",
    },
    {
      icon: <FaServer className="text-[#64ffda] text-xl" />,
      title: "Backend Architecture",
      desc: "Node.js, Express.js, REST APIs, SQL & JWT Auth",
    },
    {
      icon: <FaRocket className="text-[#64ffda] text-xl" />,
      title: "Production Ready",
      desc: "Built SaaS, business portals, & live client applications",
    },
    {
      icon: <FaUserTie className="text-[#64ffda] text-xl" />,
      title: "Business Mindset",
      desc: "Former founder with strong client & operations skills",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-6 scroll-mt-24 min-w-0" id="about">
      <div className="flex items-center gap-4 w-full min-w-0">
        <h2 className="text-fluid-section font-bold text-[#e6f1ff] flex items-center min-w-0 break-normal">
          <span className="text-[#64ffda] font-mono mr-2 flex-shrink-0">01.</span> About Me
        </h2>
        <div className="h-[1px] bg-[#233554] flex-1 ml-2 sm:ml-4" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start min-w-0">
        <div className="flex-1 flex flex-col gap-4 text-fluid-body text-[#8892b0] leading-relaxed min-w-0 break-normal">
          <p>
            I’m a full-stack web developer with hands-on experience building
            real-world applications using the MERN stack. Along with my
            development journey, I’ve worked on freelance projects and built
            production-ready web applications focused on performance and user
            experience.
          </p>

          <p>
            Before stepping into tech, I ran my own service business, where I
            developed strong skills in communication, client handling, and
            operations management. This experience helps me approach development
            with a practical mindset and focus on solving real user problems.
          </p>

          <p>
            I enjoy building scalable and user-friendly applications, and I
            continuously work on improving my skills by developing new projects
            and exploring modern technologies.
          </p>
        </div>

        <div className="w-full lg:w-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 flex-shrink-0 min-w-0">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#112240] border border-[#233554] hover:border-[#64ffda]/50 rounded-xl p-4 flex items-start gap-3 transition-all duration-200 shadow-md min-w-0"
            >
              <div className="p-2.5 bg-[#0b1f36] rounded-lg border border-[#1d3557] flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="text-sm font-bold text-[#e6f1ff] min-w-0 break-normal">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8892b0] mt-1 leading-normal min-w-0 break-normal">
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





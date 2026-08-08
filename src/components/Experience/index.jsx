const ExperienceCard = () => {
  const experiences = [
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
      duration: "2021 – 2024",
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
    <section className="w-full flex flex-col gap-6 scroll-mt-24 min-w-0" id="experience">
      <div className="flex items-center gap-4 w-full min-w-0">
        <h2 className="text-fluid-section font-bold text-[#e6f1ff] flex items-center min-w-0 break-normal">
          <span className="text-[#64ffda] font-mono mr-2 flex-shrink-0">04.</span> Work Experience
        </h2>
        <div className="h-[1px] bg-[#233554] flex-1 ml-2 sm:ml-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#112240]/90 backdrop-blur-sm border border-[#233554] hover:border-[#64ffda]/50 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1 group min-w-0"
          >
            <div className="flex flex-col gap-3 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1d3557] pb-3 min-w-0">
                <div className="min-w-0">
                  <h3 className="text-fluid-card-title font-bold text-[#e6f1ff] group-hover:text-[#64ffda] transition-colors min-w-0 break-normal">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#64ffda]">
                    @ {exp.company}
                  </p>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono bg-[#0b1f36] text-[#8892b0] rounded border border-[#1d3557] w-fit self-start flex-shrink-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="list-disc list-inside text-xs sm:text-sm text-[#8892b0] space-y-2 mt-2 leading-relaxed min-w-0">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="min-w-0 break-normal">
                    <span className="text-[#ccd6f6]">{point}</span>
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





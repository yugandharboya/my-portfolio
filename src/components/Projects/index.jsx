import projects from "../../Data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsCard = () => {
  return (
    <section className="w-full flex flex-col gap-6 scroll-mt-24 min-w-0" id="projects">
      <div className="flex items-center gap-4 w-full min-w-0">
        <h2 className="text-fluid-section font-bold text-[#e6f1ff] flex items-center min-w-0 break-normal">
          <span className="text-[#64ffda] font-mono mr-2 flex-shrink-0">03.</span> Featured Projects
        </h2>
        <div className="h-[1px] bg-[#233554] flex-1 ml-2 sm:ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#112240]/90 backdrop-blur-sm border border-[#233554] hover:border-[#64ffda]/50 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1 group min-w-0"
          >
            <div className="flex flex-col gap-3 min-w-0">
              <div className="flex items-start justify-between gap-3 min-w-0">
                <h3 className="text-fluid-card-title font-bold text-[#e6f1ff] group-hover:text-[#64ffda] transition-colors min-w-0 break-normal">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-[#8892b0] hover:text-[#64ffda] text-xl transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live site for ${project.title}`}
                      className="text-[#8892b0] hover:text-[#64ffda] text-base transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-fluid-body text-[#8892b0] leading-relaxed min-w-0 break-normal">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mt-2 pt-3 border-t border-[#1d3557]/60 flex flex-col gap-2 min-w-0">
                  <p className="text-xs font-mono text-[#64ffda] font-semibold">Key Features:</p>
                  <ul className="list-disc list-inside text-xs text-[#8892b0] space-y-1.5 leading-normal min-w-0">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="min-w-0 break-normal">
                        <span className="text-[#ccd6f6]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-[#1d3557] flex flex-wrap gap-2 items-center min-w-0">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#0b1f36] text-[#64ffda] rounded border border-[#1d3557] whitespace-nowrap"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCard;





import skillsList from "../../Data/skills";

const SkillsCard = () => {
  return (
    <section className="w-full flex flex-col gap-6 scroll-mt-24 min-w-0" id="skills">
      <div className="flex items-center gap-4 w-full min-w-0">
        <h2 className="text-fluid-section font-bold text-[#e6f1ff] flex items-center min-w-0 break-normal">
          <span className="text-[#64ffda] font-mono mr-2 flex-shrink-0">02.</span> Skills & Tech Stack
        </h2>
        <div className="h-[1px] bg-[#233554] flex-1 ml-2 sm:ml-4" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 min-w-0">
        {skillsList.map((group, index) => (
          <div
            key={group.title || index}
            className="bg-[#112240]/80 backdrop-blur-sm border border-[#233554] hover:border-[#64ffda]/50 rounded-lg p-3.5 transition-all duration-200 flex flex-col gap-3 shadow-md hover:-translate-y-1 min-w-0"
          >
            <h3 className="text-[#64ffda] font-mono text-xs uppercase tracking-wider font-semibold border-b border-[#233554] pb-2 min-w-0 truncate">
              {group.title}
            </h3>

            <div className="flex flex-col gap-2 min-w-0">
              {group.items.map((item, subIndex) => (
                <div
                  key={subIndex}
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#e6f1ff] min-w-0"
                >
                  <span className="text-[#64ffda] text-base flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="truncate min-w-0 text-[#ccd6f6]" title={item.name}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCard;





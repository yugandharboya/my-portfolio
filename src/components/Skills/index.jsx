import skillsList from "../../Data/skills";
import "./Skills.css";

const SkillsCard = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header-row">
        <h2 className="section-heading-title text-fluid-section">
          <span className="section-heading-number">02.</span> Skills & Tech Stack
        </h2>
        <div className="section-heading-line" />
      </div>

      <div className="skills-grid">
        {skillsList.map((group, index) => (
          <div
            key={group.title || index}
            className="skill-card"
          >
            <div className="skill-header-row">
              {group.categoryIcon && (
                <div className="skill-category-icon-box">
                  {group.categoryIcon}
                </div>
              )}
              <h3 className="skill-category-title">
                {group.title}
              </h3>
            </div>

            <div className="skill-items-list">
              {group.items.map((item, subIndex) => (
                <div
                  key={subIndex}
                  className="skill-item-row"
                >
                  <span className="skill-item-icon">
                    {item.icon}
                  </span>
                  <span className="skill-item-name">
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

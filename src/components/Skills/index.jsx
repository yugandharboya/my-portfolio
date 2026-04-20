import "./index.css";
import skillsList from "../../Data/skills";


const SkillsCard = () => {
  return (
    <section className="skill-section" id="skills">
      <div className="skills-header">
        <h2 className="skills-title">
          <span className="skills-number">02.</span> Skills
        </h2>
        <hr className="hr-line" />
      </div>

      <div className="skills-grid">
        {skillsList.map((group, index) => (
          <div key={index} className="skills-column">
            <h3 className="skills-category-title">{group.title}</h3>
            {group.items.map((item, subIndex) => (
              <div key={subIndex} className="skill-row">
                <span className="skill-icon">{item.icon}</span>
                <p className="skill-name">{item.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCard;

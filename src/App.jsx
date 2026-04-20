import "./app.css";

import Header from "./components/Header";
import HeroCard from "./components/Hero";
import AboutCard from "./components/About";
import ProjectsCard from "./components/Projects";
import ExperienceCard from "./components/Experience";
import SkillsCard from "./components/Skills";
import ContactCard from "./components/Contact";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <HeroCard />

        <AboutCard />

        <ProjectsCard />

        <ExperienceCard />

        <SkillsCard />

        <ContactCard />
      </main>
    </div>
  );
};

export default App;

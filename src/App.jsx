import Header from "./components/Header";
import HeroCard from "./components/Hero";
import AboutCard from "./components/About";
import SkillsCard from "./components/Skills";
import ProjectsCard from "./components/Projects";
import ExperienceCard from "./components/Experience";
import ContactCard from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <main className="app-main">
        <HeroCard />
        <AboutCard />
        <SkillsCard />
        <ProjectsCard />
        <ExperienceCard />
        <ContactCard />
      </main>
    </div>
  );
};

export default App;

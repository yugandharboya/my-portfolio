import Header from "./components/Header";
import HeroCard from "./components/Hero";
import AboutCard from "./components/About";
import SkillsCard from "./components/Skills";
import ProjectsCard from "./components/Projects";
import ExperienceCard from "./components/Experience";
import ContactCard from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] flex flex-col items-center w-full overflow-x-hidden selection:bg-[#64ffda] selection:text-[#0a192f]">
      <Header />

      <main className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 flex flex-col gap-16 sm:gap-20 md:gap-28 min-w-0">
        <HeroCard />
        <AboutCard />
        <SkillsCard />
        <ProjectsCard />
        <ExperienceCard />
        <ContactCard />
      </main>

      <footer className="w-full text-center py-6 text-xs font-mono text-[#8892b0]/70 border-t border-[#112240] mt-auto">
        <p>Built with React & Tailwind CSS — Yugandhar Boya</p>
      </footer>
    </div>
  );
};

export default App;



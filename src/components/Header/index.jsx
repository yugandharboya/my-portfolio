import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleScroll = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    const headerOffset = 80;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-[#1e293b] shadow-lg transition-all duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between min-w-0">
          <button
            onClick={() => handleScroll("hero")}
            className="text-lg sm:text-xl font-bold font-mono text-[#64ffda] hover:opacity-80 transition-opacity tracking-wide min-h-[44px] flex items-center cursor-pointer min-w-0 break-normal"
          >
            Yugandhar
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-5 font-mono text-sm">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-200 py-2 px-1 cursor-pointer min-h-[44px] flex items-center"
                  >
                    <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-4 py-2 rounded font-mono text-xs tracking-wide transition-all duration-200 min-h-[44px] flex items-center justify-center"
            >
              Resume
            </a>

            <div className="flex items-center gap-3 border-l border-[#233554] pl-4">
              <a
                href="https://github.com/yugandharboya"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="text-[#8892b0] hover:text-[#64ffda] text-xl transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yugandharboya"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="text-[#8892b0] hover:text-[#64ffda] text-xl transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <FaLinkedin />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-[#64ffda] text-2xl p-3 rounded-lg hover:bg-[#112240] focus:outline-none focus:ring-2 focus:ring-[#64ffda] min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors cursor-pointer z-50"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative top-20 w-full bg-[#0a192f] border-b border-[#1e293b] shadow-2xl p-6 flex flex-col justify-between max-h-[calc(100vh-80px)] overflow-y-auto z-50 transition-all duration-300">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="w-full text-left py-3.5 px-4 rounded-lg font-mono text-base text-[#ccd6f6] hover:text-[#64ffda] hover:bg-[#112240] transition-all min-h-[44px] flex items-center cursor-pointer"
                >
                  <span className="text-[#64ffda] mr-3 font-semibold">0{index + 1}.</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-[#1d3557]">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 py-3 rounded-lg font-mono text-center text-sm font-semibold transition-all min-h-[44px] flex items-center justify-center"
              >
                📄 Download Resume
              </a>

              <div className="flex items-center justify-center gap-6 pt-2">
                <a
                  href="https://github.com/yugandharboya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="text-[#8892b0] hover:text-[#64ffda] text-2xl p-3 rounded-full hover:bg-[#112240] transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yugandharboya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-[#8892b0] hover:text-[#64ffda] text-2xl p-3 rounded-full hover:bg-[#112240] transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;





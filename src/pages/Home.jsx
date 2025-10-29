import React, { useEffect, useState } from "react";
import SplitText from "../components/SplitText";
import Particles from "../components/Particles";
import Sai_Nath from "../assets/Sai_Nath.png";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience"];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "skills", "projects", "experience"];

  return (
    <div className="relative bg-[var(--bg-color)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={250}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-nav">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a className="flex items-center space-x-2" href="#">
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-wide whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Sai Nath
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === sec
                      ? "text-[var(--primary-color)]"
                      : "text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              className="hidden lg:inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold btn-primary"
              href="#contact"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="button-glow"></div>
            </a>

            {/* Mobile Menu */}
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden fixed top-5 right-5 text-[var(--primary-color)] z-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 right-0 h-screen w-72 bg-[var(--bg-color)] shadow-xl z-50 flex flex-col justify-between py-10 px-6 animate-slide-in">
            <div className="flex flex-col space-y-6 mt-12">
              {navItems.map((sec, index) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={`text-lg font-medium transform transition duration-300 hover:translate-x-2 ${
                    activeSection === sec
                      ? "text-[var(--primary-color)]"
                      : "text-[var(--secondary-color)]"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold btn-primary relative overflow-hidden mt-6"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="button-glow"></div>
            </a>
          </div>
        )}
      </header>

      {/* Main */}
      <main>
        {/* About Me Section */}
        <section
          id="home"
          className="hero-section min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 lg:px-8"
        >
          <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Details */}
            <div className="lg:w-1/2 flex flex-col items-start space-y-4 text-left">
              <SplitText
                text="Sai Nath Kancharakuntla"
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white"
                delay={50}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                text="Packaged App Developer Associate"
                className="text-lg sm:text-xl md:text-2xl text-[var(--primary-color)] font-semibold"
                delay={80}
                duration={0.6}
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
              />
              <a
                href="/Sai_Nath_Resume.pdf"
                target="_blank"
                className="relative inline-flex items-center justify-center px-8 py-3 mt-4 text-lg font-semibold text-black bg-[#7df9ff] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#7df9ff]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#7df9ff] via-[#00e5ff] to-[#7df9ff] opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                <span className="relative z-10 flex items-center gap-2 text-black">
                  Resume <span className="text-xl">📄</span>
                </span>
              </a>
            </div>

            {/* Right: Image */}
            <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
              <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-full overflow-hidden border-4 border-[var(--primary-color)] shadow-md">
                <img
                  src={Sai_Nath}
                  alt="Sai Nath Kancharakuntla"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <About />
        {/* Skills Section */}
        <Skills />
        {/* Project Section */}
        <Projects />
        {/* Experience Section */}
        <Experience />
        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}

export default Home;

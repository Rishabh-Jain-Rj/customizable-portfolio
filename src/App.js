import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import portfolioData from "./data/portfolio";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`App  ${darkMode ? "dark" : ""}`}>
      <div className="p-5 bg-gray-100 min-w-screen  dark:bg-neutral-950 dark:text-white text-gray-900 min-h-screen">
        <HeroSection
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          about={portfolioData.about}
          contact={portfolioData.contact}
        />
        <div className="grid md:grid-cols-3 md:gap-7 gap-y-7 mt-7">
          <div>
            <Skills skills={portfolioData.skills} />
            <Education qualifications={portfolioData.qualifications} />
          </div>
          <div>

          <Projects projects={portfolioData.projects} />
          </div>
          <div>
            <Experience experiences={portfolioData.experiences}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

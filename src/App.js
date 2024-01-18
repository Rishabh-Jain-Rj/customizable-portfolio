
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
 const [darkMode,setDarkMode]= useState(false);
  return (
    <div className={`App  ${darkMode?"dark":""}`}>
      <div className="bg-white text-gray-900 min-h-screen  dark:bg-gray-900 px-10 dark:text-white">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <HeroSection darkMode={darkMode}/>
      </div>
    </div>
  );
}

export default App;

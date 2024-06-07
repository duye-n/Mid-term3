import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

function App() {
  const savedDarkMode = localStorage.getItem("isDarkMode") === "true";

  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);
  const [icon, setIcon] = useState(savedDarkMode ? faMoon : faSun);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); 
    setIcon(isDarkMode ? faSun : faMoon); 
  };

  return (
    <div className={`App ${isDarkMode ? "dark-theme" : ""}`}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="toggle-theme">
            <FontAwesomeIcon
              icon={icon}
              onClick={toggleTheme}
              style={{ color: "yellow" }}
            />
          </div>
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
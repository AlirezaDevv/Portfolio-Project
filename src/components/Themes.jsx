import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";
import { useState, useEffect } from "react";

const getStorageColor = () => {
  let Color = "hsl(252,35%,51%)";

  if (localStorage.getItem("color")) {
    Color = localStorage.getItem("color");
  }
  return Color;
};


const getStorageTheme = () => {
    let theme = "dark-theme";
  
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);


  useEffect(() => {
  document.documentElement.className = theme
  localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={` style__switcher ${showSwitcher && "show-switcher"}`}>
        <div
          className="style__switcher-toggler grid"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>

        <div className="theme__toggler grid" onClick={toggleTheme}>
         {theme === 'light-theme' ? <BsMoon/> : <BsSun/> }
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={theme.id} {...theme} changeColor={changeColor} />
            );
          })}
        </div>

        <div
          className="style_switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;

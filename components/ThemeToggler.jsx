import { useState, useEffect } from "react";
import { FaMoon, FaRegMoon, FaRegSun, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const [activeTheme, setActiveTheme] = useState("light");

  const toggleTheme = () => {
    const docTheme = document?.documentElement?.classList.value;
    if (!docTheme) {
      localStorage.setItem("theme", activeTheme);
      setTimeout(() => {
        document.documentElement.classList.add(activeTheme);
      });
      return;
    }
    setActiveTheme(docTheme == "dark" ? "light" : "dark");
    localStorage.setItem("theme", activeTheme);
    activeTheme === "dark"
      ? (document.documentElement.classList.remove("dark"),
        document.documentElement.classList.add("light"))
      : (document.documentElement.classList.remove("light"),
        document.documentElement.classList.add("dark"));
  };

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <div className="cursor-pointer">
      {activeTheme == "dark" ? (
        <FaSun size={22} onClick={toggleTheme} color="yellow" />
      ) : (
        <FaMoon size={20} onClick={toggleTheme} className="opacity-80" />
      )}
    </div>
  );
};

export default ThemeToggler;

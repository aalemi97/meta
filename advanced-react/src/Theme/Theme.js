import Switch from "./Switch";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./Theme.css";

function ThemeSwitcher() {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "Theme-Light" : "Theme-Dark"}>
      <Switch />
      <h1 className={theme === "light" ? "light-mode-text" : "dark-mode-text"}>
        Little Lemon 🍕
      </h1>
      <h2 className={theme === "light" ? "light-mode-text" : "dark-mode-text"}>
        When it comes to dough
      </h2>
      <p className={theme === "light" ? "light-mode-text" : "dark-mode-text"}>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </p>
    </div>
  );
}

export default ThemeSwitcher;

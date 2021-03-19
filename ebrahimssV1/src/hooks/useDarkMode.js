import useMedia from "../hooks/useMedia";
import { useEffect, useState } from "react";

export default () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  const preferDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      window.localStorage.setItem("theme", localTheme);
    } else if (preferDarkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [preferDarkMode]);

  return [theme, toggleTheme];
};

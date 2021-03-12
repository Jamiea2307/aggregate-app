import { useState, useEffect } from "react";

const themeType = {
  Light: "Light",
  Dark: "Dark",
};

export const useTheme = () => {
  const [theme, setTheme] = useState(themeType.Light);

  const toggleTheme = () => {
    if (theme === themeType.Light) {
      setTheme(themeType.Dark);
      window.localStorage.setItem("theme", themeType.Dark);
    } else {
      setTheme(themeType.Light);
      window.localStorage.setItem("theme", themeType.Light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    localTheme
      ? setTheme(localTheme)
      : window.localStorage.setItem("theme", themeType.Light);
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;

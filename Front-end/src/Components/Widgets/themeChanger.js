import { useEffect, useState } from "react";
import CheckboxInput from "../../Styles/Widgets/themeBox";
import { ReactComponent as Moon } from "../../Styles/Images/Moon.svg";
import { ReactComponent as Sun } from "../../Styles/Images/Sun.svg";
import useTheme from "../../Hooks/useTheme";

const ThemeChanger = (themes) => {
  const [theme, toggleTheme] = useTheme();

  const {
    theme: [setTheme],
  } = {
    theme: useState(),
    ...(themes.themes || {}),
  };

  useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);

  return (
    <CheckboxInput onClick={toggleTheme}>
      {theme === "Dark" ? <Sun /> : <Moon />}
    </CheckboxInput>
  );
};

export default ThemeChanger;

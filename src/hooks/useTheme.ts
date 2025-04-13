import { useEffect, useState } from "react";
import { themeKey } from "../constants/storage";
import { Themes } from "../types/enums/Themes";
import { htmlDataTheme } from "../constants/domAttributes";

export const useTheme = () => {
  // @TODO: use context for better global theme state control
  const [theme, setTheme] = useState<Themes>(() => {
    const storedTheme = localStorage.getItem(themeKey) || "";

    if (Object.values(Themes).includes(storedTheme as Themes)) {
      return storedTheme as Themes;
    }

    return Themes.Dark;
  });

  useEffect(() => {
    document.querySelector("html")?.setAttribute(htmlDataTheme, theme);

    localStorage.setItem(themeKey, theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev == Themes.Dark ? Themes.Light : Themes.Dark));
  };

  return {
    currentTheme: theme,
    changeTheme,
  };
};

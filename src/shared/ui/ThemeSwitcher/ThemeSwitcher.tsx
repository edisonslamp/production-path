import { Themes, useTheme } from "@/app/providers/ThemeProvider";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { classNames } from "@/shared/lib/classNames";
import { FC } from "react";
import { Button, ThemeButton } from "../Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Themes.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

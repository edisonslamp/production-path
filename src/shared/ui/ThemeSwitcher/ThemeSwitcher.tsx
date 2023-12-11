import { Themes, useTheme } from "app/providers/ThemeProvider";
import { memo } from "react";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames } from "shared/lib";
import { Button, ThemeButton } from "../Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames("", {}, [className])}
        >
            {theme === Themes.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});

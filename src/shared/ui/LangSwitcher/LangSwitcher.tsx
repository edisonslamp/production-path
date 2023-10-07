import i18next from "i18next";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "../../lib";
import { Button, ThemeButton } from "../Button/Button";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18next.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
            className={classNames("", {}, [className])}
        >
            {t(short ? "Сокращенный" : "Язык")}
        </Button>
    );
};

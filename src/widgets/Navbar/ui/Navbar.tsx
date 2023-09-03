import { BugButton } from "@/app/providers/ErrorBoundary";
import { classNames } from "@/shared/lib";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation("translation");

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <BugButton />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                    className={cls.mainLink}
                >
                    {t("Главная страница")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t("Страница о сайте")}
                </AppLink>
            </div>
        </div>
    );
};

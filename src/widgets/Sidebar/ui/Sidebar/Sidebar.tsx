import { BugButton } from "app/providers/ErrorBoundary";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme, LangSwitcher, ThemeSwitcher } from "shared/ui";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";
interface SidebarProps {
    className?: string;
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => {
            return !prev;
        });
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div className={cls.items}>
                <BugButton />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.link}
                >
                    {t("Главная страница")}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.link}
                >
                    {t("Страница о сайте")}
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};

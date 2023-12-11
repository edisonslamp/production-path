import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher, ThemeSwitcher } from "shared/ui";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { SidebarItemList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => {
            return !prev;
        });
    };

    const itemsList = useMemo(() => {
        return SidebarItemList.map((item) => (
            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ));
    }, [collapsed]);

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

            <div className={cls.items}>{itemsList}</div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});

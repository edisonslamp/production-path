import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { AppLink, AppLinkTheme } from "shared/ui";
import { SidebarItemType } from "../../model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};

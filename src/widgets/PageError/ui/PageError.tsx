import { classNames } from "@/shared/lib";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import cls from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t("Произошла непредвиденная ошибка")}</h1>
        </div>
    );
};

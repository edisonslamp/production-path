import { classNames } from "@/shared/lib";
import { FC } from "react";
import { LoaderIcon } from "@/shared/ui";
import cls from "./LoaderPage.module.scss";

interface LoaderPageProps {
    className?: string;
}
export const LoaderPage: FC<LoaderPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.LoaderPage, {}, [className])}>
            <LoaderIcon />
        </div>
    );
};

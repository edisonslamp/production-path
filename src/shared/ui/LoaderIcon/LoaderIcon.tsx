import { classNames } from "@/shared/lib/classNames/classNames";
import { FC } from "react";
import "./LoaderIcon.scss";

interface LoaderIconProps {
    className?: string;
}
export const LoaderIcon: FC<LoaderIconProps> = ({ className }) => {
    return (
        <div className={classNames("lds-spinner", {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

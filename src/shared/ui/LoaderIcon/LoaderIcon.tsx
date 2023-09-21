import { FC } from "react";
import { classNames } from "shared/lib";
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

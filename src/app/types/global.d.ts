declare module "*.scss" {
    // interface IClassNames {
    //     [className: string]: string;
    // }
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.jpeg";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const IS_DEV: boolean;
declare const _API_: string;

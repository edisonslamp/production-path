import { lazy } from "react";

export const AboutPageLazy = lazy(
    () =>
        new Promise((res, rej) => {
            // @ts-ignore
            setTimeout(() => res(import("./AboutPage")), 2000);
        }),
);

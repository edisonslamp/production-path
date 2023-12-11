import { lazy } from "react";

export const ProfilePageLazy = lazy(
    () =>
        new Promise((res, rej) => {
            // @ts-ignore
            setTimeout(() => res(import("./ProfilePage")), 2000);
        }),
);

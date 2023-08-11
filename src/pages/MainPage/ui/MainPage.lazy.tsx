import { lazy } from "react";

export const MainPageLazy = lazy(
  () =>
    new Promise((res, rej) => {
      // @ts-ignore
      setTimeout(() => res(import("./MainPage")), 2000);
    })
);

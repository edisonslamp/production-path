import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((res, rej) => {
            // @ts-ignore
            setTimeout(() => res(import("./LoginForm")), 2000);
        }),
);

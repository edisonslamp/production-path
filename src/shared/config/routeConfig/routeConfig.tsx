import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

// это нужно для того если мы хотим хранить информацию с стейте (Redux ToolKit, ect.)
export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found",
}

// указываем путь до страниц
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*",
};

// создаем роут конфиг чтобы определить какой объект отрисовываем и тд.
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};

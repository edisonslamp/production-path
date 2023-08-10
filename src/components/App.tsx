import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "../pages/AboutPage/AboutPage.lazy";
import { useTheme } from "../theme/useTheme";
import "../styles/index.scss";
import className from "../helpers/classNames/className";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная страница</Link> <br />
      <Link to={"/about"}>Страница о сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

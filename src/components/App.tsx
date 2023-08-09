import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "../pages/AboutPage/AboutPage.lazy";
import "../styles/index.scss";
import { useTheme } from "../theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
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

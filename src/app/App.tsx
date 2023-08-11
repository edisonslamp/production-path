import { useTheme } from "@/app/providers/ThemeProvider";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { className } from "@/shared/lib/classNames";
import "app/styles/index.scss"; // changed
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная страница</Link> <br />
      <Link to={"/about"}>Страница о сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

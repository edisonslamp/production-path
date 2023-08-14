import AppRouter from "@/app/providers/router";
import { useTheme } from "@/app/providers/ThemeProvider";
import { className } from "@/shared/lib/classNames";
import "app/styles/index.scss"; // changed
import { Link } from "react-router-dom";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная страница</Link> <br />
      <Link to={"/about"}>Страница о сайте</Link>
      <AppRouter />
    </div>
  );
};

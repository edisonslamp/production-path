import AppRouter from "@/app/providers/router";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames/className";
import { Navbar } from "@/widgets/Navbar";
import "app/styles/index.scss"; // changed

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE THEME</button>
    </div>
  );
};

import { classNames } from "@/shared/lib/classNames/className";
import { FC } from "react";
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <Link to={"/"} className={cls.mainLink}>
          Главная страница
        </Link>
        <Link to={"/about"}>Страница о сайте</Link>
      </div>
    </div>
  );
};

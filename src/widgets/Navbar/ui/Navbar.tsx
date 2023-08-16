import { classNames } from "@/shared/lib/classNames/className";
import { FC } from "react";
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <Link to={"/"}>Главная страница</Link> <br />
      <Link to={"/about"}>Страница о сайте</Link>
    </div>
  );
};

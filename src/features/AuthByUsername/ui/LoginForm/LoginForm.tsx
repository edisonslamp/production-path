import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, Input } from "shared/ui";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}
export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t("Введите username")}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t("Введите пароль")}
            />
            <Button className={cls.loginBtn}>{t("Войти")}</Button>
        </div>
    );
};

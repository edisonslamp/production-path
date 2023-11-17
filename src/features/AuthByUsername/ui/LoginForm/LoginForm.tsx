import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector, useStore } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, Input, Text, TextTheme, ThemeButton } from "shared/ui";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
}
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        store.reducerManager.add("loginForm", loginReducer);
        dispatch({ type: "@INIT loginForm reducer" });
        return () => {
            store.reducerManager.remove("loginForm");
            dispatch({ type: "@DESTROY loginForm reducer" });
        };
        // eslint-disable-next-line
    }, []);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text text={t("Форма авторизации")} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}

            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t("Введите username")}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t("Введите пароль")}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});

export default LoginForm;

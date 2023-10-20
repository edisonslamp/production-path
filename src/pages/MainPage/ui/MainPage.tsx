import { Counter } from "entities/Counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui";

const MainPage = () => {
    const { t } = useTranslation("main");

    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t("Главная страница")}
            <Counter />
            <Input
                value={value}
                onChange={onChange}
                placeholder="Enter a text"
            />
        </div>
    );
};

export default MainPage;

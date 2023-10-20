import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

// так как мы переопределили onChange и value тайпскрипт ругается, нужно использовать Omit что ты исключить некоторые значения.
type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>, // это оставляем в типе
    "value" | "onChange" // а это то, что исключаем из типа
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

// eslint-disable-next-line
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    // eslint-disable-next-line
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={classNames(cls.placeholder, {}, [className])}>
                    {`${placeholder}> `}
                </div>
            )}
            <div className={classNames(cls.caretWrapper, {}, [className])}>
                <input
                    className={classNames(cls.input, {}, [className])}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    ref={ref}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={classNames(cls.caret, {}, [className])}
                        style={{ left: `${caretPosition * 8}px` }}
                    ></span>
                )}
            </div>
        </div>
    );
});

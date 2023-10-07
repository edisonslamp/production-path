import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Button, Modal, ThemeButton } from "shared/ui";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t(
                    "Hello! I'm your first modal window! You would be happy seenig me here!",
                )}
            </Modal>
        </div>
    );
};

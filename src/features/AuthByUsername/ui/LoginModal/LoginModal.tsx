import { FC, Suspense } from "react";
import { LoaderIcon, Modal } from "shared/ui";
import { LoginFormAsync } from "../LoginForm/LoginForm.lazy";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
}
export const LoginModal: FC<LoginModalProps> = ({
    className,
    isOpen,
    onClose,
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<LoaderIcon />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

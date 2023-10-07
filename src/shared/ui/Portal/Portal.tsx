import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: ModalProps) => {
    const { element = document.body, children } = props;
    return createPortal(children, element);
};

import React, { ReactNode, useEffect, useMemo, useState } from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";

interface ModalProps {
    children?: ReactNode;
}

const modalRootElement = document.querySelector("#modal");

const Modal: React.FC<ModalProps> = ({children}) => {
    const [active, setActive] = useState<boolean>(false);
    const modalClass = active ? `${styles.modal} ${styles.active}` : styles.modal;
    const modalContentClass = active ? `${styles.modalContent} ${styles.active}` : styles.modalContent;

    const element = useMemo(() => {
        return document.createElement("div");
    }, []);

    useEffect(() => {
        if (modalRootElement)
            modalRootElement.appendChild(element);

        setTimeout(() =>
            setActive(true), 0);

        return () => {
            if (modalRootElement)
                modalRootElement.removeChild(element);
        };
    }, [element]);

    const onClose = () => setActive(prevState => !prevState);

    const jsx = (
        <div className={modalClass} >
            <div className={modalContentClass} >
                {children}
                <input type="button" value="Закрыть" onClick={onClose} />
            </div >
        </div >
    );

    return createPortal(jsx, element);
};

export default Modal;
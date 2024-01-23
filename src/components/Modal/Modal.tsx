import React, { ReactNode, useEffect, useState } from "react";
import styles from "./modal.module.css";

interface ModalProps {
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({children}) => {
    const [active, setActive] = useState<boolean>(false);

    const modalClass = active ? `${styles.modal} ${styles.active}` : styles.modal;
    const modalContentClass = active ? `${styles.modalContent} ${styles.active}` : styles.modalContent;

    useEffect(() => {
        setTimeout(() =>
            setActive(true), 0);
    }, []);

    const onClose = () => setActive(prevState => !prevState);

    return (
        <div className={modalClass} >
            <div className={modalContentClass} >
                {children}
                <input type="button" value="Закрыть" onClick={onClose} />
            </div >
        </div >
    );
};

export default Modal;
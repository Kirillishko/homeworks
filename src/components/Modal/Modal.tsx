import React, {Dispatch, SetStateAction} from "react";
import styles from "./modal.module.css";

interface ModalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    children?: any
}

const Modal = ({active, setActive, children}: ModalProps) => {
    const modalClass = active ? `${styles.modal} ${styles.active}` : styles.modal;
    const modalContentClass = active ? `${styles.modalContent} ${styles.active}` : styles.modalContent;

    return (
        <div className={modalClass} >
            <div className={modalContentClass} >
                {children}
                <input type="button" value="Закрыть" onClick={() => setActive(prevState => !prevState)} />
            </div >
        </div >
    );
};

export default Modal;
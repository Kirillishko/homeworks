import React from "react";
import Modal from "./Modal";
import styles from "./errorModal.module.css";

interface ErrorModalProps {
    title: string,
    description: string
}

const ErrorModal: React.FC<ErrorModalProps> = ({title, description}) => {
    return (
        <Modal >
            <h2 className={styles.title} >{title}</h2 >
            <h3 className={styles.description} >{description}</h3 >
        </Modal >
    );
};


export default ErrorModal;
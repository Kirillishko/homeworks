import React, { FC } from "react";
import styles from "./NotFound.module.css";

interface NotFoundProps {
    text: string;
}

const NotFound: FC<NotFoundProps> = ({ text }) => {

    return (
        <div className={styles.content}>
            <h2>{text}</h2>
        </div>
    );
};


export default NotFound;
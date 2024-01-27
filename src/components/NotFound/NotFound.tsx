import React from "react";
import styles from "./notFound.module.css";

interface NotFoundProps {
    text: string;
}

const NotFound = ({ text }: NotFoundProps) => {
    return (
        <div className={styles.content} >
            <h2 >{text}</h2 >
        </div >
    );
};


export default NotFound;
import React, { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => {

    return (
        <div className={styles.wrapper}>
            <span className={styles.loader}/>
        </div>
    );
};


export default Loader;
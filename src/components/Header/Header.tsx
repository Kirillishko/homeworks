import React, {ChangeEvent} from "react";
import styles from "./header.module.css";

interface HeaderProps {
    searchInputHandler: (e: ChangeEvent<HTMLInputElement>) => void,
}

function Header({searchInputHandler}: HeaderProps) {
    return (
        <header className={styles.header} >
            <form className={styles.searchForm} >
                <button className={styles.searchButton} >
                    <svg height="24px" viewBox="0 0 24 24" width="24px" >
                        <g clipPath="url(#clip0_2903_338)" >
                            <path
                                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
                        </g >
                    </svg >
                </button >
                <input className={styles.searchInput} placeholder="Search products" type="search"
                       onChange={searchInputHandler} />
            </form >
            <nav >
                <a href="#" ><img alt="Cart" src="/src/icons/shopping_cart.svg" /></a >
                <a href="#" ><img alt="Account" src="/src/icons/account_circle.svg" /></a >
            </nav >
        </header >
    );
}

export default Header;
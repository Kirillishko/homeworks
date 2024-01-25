import React, { ChangeEvent } from "react";
import styles from "./header.module.css";
import { ReactComponent as SearchIconComponent } from "../../icons/search.svg";
import ShoppingCartIcon from "../../icons/shopping_cart.svg";
import AccountIcon from "../../icons/account_circle.svg";

interface HeaderProps {
    setSearchInput?: (value: React.SetStateAction<string>) => void;
}

const Header: React.FC<HeaderProps> = ({setSearchInput}) => {

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!setSearchInput) {
            return;
        }

        const value = e.target.value.toLowerCase().trim();
        setSearchInput(value);
    };

    return (
        <header className={styles.header} >
            <form className={styles.searchForm} >
                <button className={styles.searchButton} >
                    <SearchIconComponent />
                </button >
                <input className={styles.searchInput} placeholder="Search products" type="search"
                       onChange={onSearchInputChange} />
            </form >
            <nav >
                <a href="#" ><img alt="Cart" src={ShoppingCartIcon} /></a >
                <a href="#" ><img alt="Account" src={AccountIcon} /></a >
            </nav >
        </header >
    );
};

export default Header;